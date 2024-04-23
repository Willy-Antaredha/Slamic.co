import '../pages/style.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Home from '../components/home'

function HomePage() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const navigate = useNavigate()
    const [isLoad, setIsload] = useState(true)
    const [waktu, setWaktu] = useState({})

    const JadwalSholat = async () => {
        var sekarang = new Date()
        var tahun = sekarang.getFullYear()
        var bulan = sekarang.getMonth() + 1
        var response = await axios.get(`https://api.aladhan.com/v1/calendarByAddress/${tahun}/${bulan}?address=Kabupaten%20Bondowoso%20Jawa%20Timur&method=2`)
        setWaktu(response.data.data[0].timings)
    }

    const Data = async () => {
        try {
            const response = await axios.get('https://quran-api.santrikoding.com/api/surah')
            setFilter(response.data)
            setData(response.data)
            setIsload(false);
        } catch (er) {
            console.log(er)
        }

    }

    const HandelSearch = (e) => {
        const result = data.filter((item) => {
            return item.nama_latin.toLowerCase().includes(e) || item.arti.toLowerCase().includes(e) || item.nomor.toString().includes(e)
        })
        setFilter(result)
    }

    const HandleSelect = (e) => {
        const result = data.filter((item) => {
            return item.tempat_turun.includes(e)

        })
        e === 'all' ? setFilter(data) : setFilter(result)
    }

    useEffect(() => {
        Data()
        JadwalSholat()
    }, [])

    return (
        <div className="box">
            <Home/>
            <div className="sholat">
                <div className="card">
                    <div className="card-item-sholat">
                        <p className='key-waktu'>Subuh</p>
                        <p className='waktu'>{waktu.Fajr}</p>
                    </div>
                    <div className="card-item-sholat">
                        <p className='key-waktu'>Dzuhur</p>
                        <p className='waktu'>{waktu.Fajr}</p>
                    </div>
                    <div className="card-item-sholat">
                        <p className='key-waktu'>Ashar</p>
                        <p className='waktu'>{waktu.Fajr}</p>
                    </div>
                    <div className="card-item-sholat">
                        <p className='key-waktu'>Magrib</p>
                        <p className='waktu'>{waktu.Fajr}</p>
                    </div>
                    <div className="card-item-sholat">
                        <p className='key-waktu'>Isya'</p>
                        <p className='waktu'>{waktu.Fajr}</p>
                    </div>
                </div>
            </div>
            <div className="container home">
                {isLoad ? (
                    <div className="card">
                        <div className="card-body">
                            <div className="card-item">
                                loading data...
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="card">
                        <div className="filter">
                            <input type="text" onChange={(e) => {
                                HandelSearch(e.target.value.toLowerCase())
                            }} placeholder='Search Surah' />
                            <select onChange={(e) => HandleSelect(e.target.value)}>
                                <option selected value='all'>Madinah Dan Makah</option>
                                <option value='madinah'>Madinah</option>
                                <option value='mekah'>Mekah</option>
                            </select>
                        </div>
                        <div className="card-body">
                            {
                                filter.map((el) => {
                                    return (
                                        // <Link to="/surah/1">
                                        <div id='quran' className="card-item" onClick={() => {
                                            navigate(`/surat/${el.nomor}`);
                                        }}>
                                            <div className="nomor">
                                                <p>{el.nomor}</p>
                                            </div>
                                            <div className="ket">
                                                <div className="ket-head">
                                                    <p className="nama-latin">{el.nama_latin}</p>
                                                    <p className='arti'>{el.arti.charAt(0).toUpperCase() + el.arti.slice(1)}</p>
                                                </div>
                                                <div className="ket-body">
                                                    <p className="">{el.tempat_turun.charAt(0).toUpperCase() + el.tempat_turun.slice(1)}-<span>{el.jumlah_ayat}</span></p>
                                                </div>
                                            </div>
                                            <div className="arab">
                                                <p>{el.nama}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage