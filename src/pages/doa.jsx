import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import DoaHarian from '../asset/doa_harian.json'

function Doa() {

  const [search, setSearch] = useState([])

  const HandleSearch = (e) => {
    const result = DoaHarian.filter((item) => {
        return item.doa.toLowerCase().includes(e)
    })
    setSearch(result)
}

  useEffect(() => {
    setSearch(DoaHarian)
  }, [])

  return (
    <div className="box">
      <div className="container kisah doa">
        <input type="text" placeholder='Masukkan Nama Nabi' onChange={(e) => {
          HandleSearch(e.target.value.toLowerCase());
        }} />
        <div className="card">
          {
            search.map((el) => (
              <div className="card-item">
                <p className="doa">{el.doa}</p>
                <p className="ayat">{el.ayat}</p>
                <p className="latin">{el.latin}</p>
                <p className="arti">{el.artinya}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doa