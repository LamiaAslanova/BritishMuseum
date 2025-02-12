import React, { useContext, useEffect } from 'react'
import './Basket.css'
import Table from '../../../components/site/BasketComponents/Table'
import MainContext from '../../../context/context'
import { useNavigate } from 'react-router'
import { Helmet } from 'react-helmet'

const Basket = () => {

    const { cartItems } = useContext(MainContext)
    const navigate = useNavigate()
    const userLocal = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if (!userLocal.id) {
            navigate('/sign-up')
        }
    }, [userLocal, navigate])

    return (
        <div className="basket">
            <Helmet>
                <title>Cart | British Museum</title>
            </Helmet>
            <div className="custom-container basket__title__cont">
                <div className="row basket__title__row">
                    <div className="col-12 basket__title__col">
                        <h2>Shopping cart</h2>
                    </div>
                </div>
            </div>
            <Table cartItems={cartItems} />
        </div>
    )
}

export default Basket