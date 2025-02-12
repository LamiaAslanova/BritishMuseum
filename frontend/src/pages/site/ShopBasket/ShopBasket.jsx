import React, { useContext, useEffect } from 'react'
import './ShopBasket.css'
import Table from '../../../components/site/ShopBasketComponents/Table'
import MainContext from '../../../context/context'
import { useNavigate } from 'react-router'
import { Helmet } from 'react-helmet'

const ShopBasket = () => {

  const { shopCartItems, setShopCartItems } = useContext(MainContext)
  const navigate = useNavigate()
  const userLocal = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if (!userLocal.id) {
      navigate('/sign-up')
    }
  }, [userLocal, navigate])

  return (
    <div className="shopBasket">
      <Helmet>
        <title>Shop - Cart | British Museum</title>
      </Helmet>
      <div className="custom-container shopBasket__title__cont">
        <div className="row shopBasket__title__row">
          <div className="col-10 shopBasket__title__col">
            <h2>Shopping cart</h2>
          </div>
        </div>
      </div>
      <Table shopCartItems={shopCartItems} />
    </div>
  )
}

export default ShopBasket