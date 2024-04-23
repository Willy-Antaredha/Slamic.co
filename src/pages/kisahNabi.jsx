import React, { useEffect, useState } from 'react'
import KisahNabi from '../asset/kisah_nabi.json'

function KisahPage() {
    const [kisah, setKisah] = useState()
    const [search, setSearch] = useState([])

    const HandleSearch = (e) => {
        const result = KisahNabi.filter((item) => {
            return item.name.toLowerCase().includes(e)
        })
        setSearch(result)
    }

    useEffect(()=>{
        setSearch(KisahNabi)
    },[])

    return (
        <div className="box">
            <div className="container kisah">
                <input type="text" placeholder='Masukkan Nama Nabi' onChange={(e) => {
                    HandleSearch(e.target.value.toLowerCase());
                }} />
                <div className="card">
                    {
                        search.map((el, index) => (
                            <div className="card-item" onClick={() => {
                                if (index == kisah) {
                                    setKisah();
                                } else {
                                    setKisah(index)
                                }
                            }} >
                                <div className="header">
                                    <div className="ket">
                                        <p className="nama">{el.name}</p>
                                        <p>Tahun Kelahiran : {el.thn_kelahiran}</p>
                                        <p>Tempat : {el.tmp}</p>
                                    </div>
                                </div>
                                {kisah == index && (
                                    <div className="card-body">
                                        <p>{el.description}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default KisahPage