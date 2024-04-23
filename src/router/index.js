import React from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import HomePages from '../pages'
import SuratPages from '../pages/surat'
import KisahPage from '../pages/kisahNabi'
import Doa from '../pages/doa'
import Dzikir from '../pages/dzikir'
import TemplatePages from '../pages/template'
import NotFound from '../pages/notFound'

function Routing() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<TemplatePages/>}>
            <Route path='/' element={<HomePages/>} />
            <Route path='/surat/:nomor' element={<SuratPages/>} />
            <Route path='/kisah' element={<KisahPage/>} />
            <Route path='/doa' element={<Doa/>} />
            <Route path='/dzikir' element={<Dzikir/>} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
  )
}

export default Routing