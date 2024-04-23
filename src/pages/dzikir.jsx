import React from 'react'
import AsmaulHusna from '../asset/asmaulHusna.json'

function Dzikir() {
  return (
    <div className="box">
        <div className="container kisah asmaul">
            <div className="card">
              {
                AsmaulHusna.map((el)=>(
                  <div className="card-item">
                    <p className="arab">{el.arab}</p>
                    <p className="latin">{el.latin}</p>
                    <p className="arti">{el.arti}</p>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Dzikir