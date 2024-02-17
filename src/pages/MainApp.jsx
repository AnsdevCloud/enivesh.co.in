import React from 'react'
import Navbar from '../components/elements/Navbar'
import { Outlet } from 'react-router-dom'
import FooterNav from '../components/elements/FooterNav'
import Footer from '../components/elements/Footer'

const MainApp = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <FooterNav />
            <Footer version={"1.0.0.0"} />


        </>
    )
}

export default MainApp