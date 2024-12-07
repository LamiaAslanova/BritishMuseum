import React from 'react'
import Header from '../../layouts/admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layouts/admin/Footer/Footer'

const AdminRoot = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AdminRoot