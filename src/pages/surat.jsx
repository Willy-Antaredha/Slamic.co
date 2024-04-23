import axios from 'axios'
import '../pages/style.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import Footer from '../components/footer'

function Surat() {
    const { nomor } = useParams()
    const [surat, setSurat] = useState([])
    const [ayat, setAyat] = useState([])
    const [isLoad, setIsload] = useState(true)

    const Data = async () => {
        try {
            const response = await axios.get(`https://quran-api.santrikoding.com/api/surah/${nomor}`)
            setSurat(response.data)
            setAyat(response.data.ayat)
            setIsload(false)
        } catch (er) {
            console.log(er);
        }
    }

    useEffect(() => {
        // CekBasmalah()
        Data()
    }, [])


    return (
        <div className="box">
            <div className="container">
                <div className="card surat">
                    <Link to={'/'}>
                        <button>Kembali</button>
                    </Link>
                    {
                        isLoad ? (
                            <div className="ayat">
                                <p>Loading Data....</p>
                            </div>
                        ) : (
                            <>
                                {
                                    surat.nomor !== 1 && (
                                        <div className="ayat">
                                            <div className="head">
                                                <div className="nomor">
                                                    <p>*</p>
                                                </div>
                                                <div className="isi-ayat">
                                                    <p>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                                                </div>
                                            </div>
                                            <div className="taf">
                                                <p>{parse('bismi <strong>al</strong>l<u>aa</u>hi <strong>al</strong>rra<u>h</u>m<u>aa</u>ni <strong>al</strong>rra<u>h</u>iim<strong>i</strong>')}</p>
                                                <p>Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.</p>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    ayat.map((el) => {
                                        return (
                                            <div className="ayat">
                                                <div className="head">
                                                    <div className="nomor">
                                                        <p>{el.nomor}</p>
                                                    </div>
                                                    <div className="isi-ayat">
                                                        <p>{el.ar}</p>
                                                    </div>
                                                </div>
                                                <div className="taf">
                                                    <p>{parse(el.tr)}</p>
                                                    <p>{el.idn}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }</>
                        )
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Surat