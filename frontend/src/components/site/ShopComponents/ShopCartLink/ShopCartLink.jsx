import React, { useContext } from 'react'
import './ShopCartLink.css'
import { Link } from 'react-router-dom'
import MainContext from '../../../../context/context'
import { useSelector } from 'react-redux'

const ShopCart = () => {

    const { shopCartItems } = useContext(MainContext)
    const user = useSelector((state) => state.user)

    return (
        <Link to='/shop-cart' className="shopCart">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Cart ({user.id ? shopCartItems.length : "0"})</p>
        </Link>
    )
}

export default ShopCart