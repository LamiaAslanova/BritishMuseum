import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../layouts/site/Header/Header'
import Footer from '../../layouts/site/Footer/Footer'

const SiteRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default SiteRoot