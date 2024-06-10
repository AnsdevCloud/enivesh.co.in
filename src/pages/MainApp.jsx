import React from 'react'
import Navbar from '../components/elements/Navbar'
import { Outlet } from 'react-router-dom'
import FooterNav from '../components/elements/FooterNav'
import Footer from '../components/elements/Footer'
import styled from 'styled-components'

const MainApp = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Outlet />
            </Wrapper>
            <FooterNav />
            <Footer version={"2.5.0"} />


        </>
    )
}

export default MainApp
const Wrapper = styled.div`
min-height: 100vh;
  
`;