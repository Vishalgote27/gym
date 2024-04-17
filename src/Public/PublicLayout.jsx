import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer'

const PublicLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />

    </>
}

export default PublicLayout