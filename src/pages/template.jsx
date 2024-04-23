import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

function TemplatePages() {
    return (
        <div>
            <Navbar />
            {/* content */}
            <Outlet />
            {/* end-content */}
            <Footer />
        </div>
    )
}

export default TemplatePages