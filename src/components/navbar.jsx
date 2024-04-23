import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className="nav-logo">
            <a href="">
                <h1>Slamic.co</h1>
            </a>
        </div>
        <div className="nav-link">
            <ul>
                <Link to='/'>
                    <li>Beranda</li>
                </Link>
                <Link to='/#quran'>
                    <li>Al-Quran</li>
                </Link>
                <Link to="/kisah">
                    <li>Kisah Nabi</li>
                </Link>
                <Link to='/doa'>
                    <li>Doa</li>
                </Link>
                <Link to='/dzikir'>
                    <li>Asmaul Husna</li>
                </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar