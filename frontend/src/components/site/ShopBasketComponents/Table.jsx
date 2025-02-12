import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Table = ({ shopCartItems }) => {

    const { increaseShopCart, decreaseShopCart, removeFromShopCart } = useContext(MainContext)
    let sum = 0

    return (
        <>
            <div className="custom-container shopBasket__cont">
                <div className="row shopBasket__row">
                    <div className="col-10 shopBasket__col">
                        {
                            shopCartItems && shopCartItems.length > 0 ? (
                                <table class="table">
                                    <tbody>
                                        {
                                            shopCartItems.map((shopCartItem, index) => {
                                                sum += shopCartItem.totalPrice
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="shopTableItem">
                                                                <img src={shopCartItem.item.images[0]} alt="" />
                                                                <div className="shopTableItem__right">
                                                                    <h3>{shopCartItem.item.title}</h3>
                                                                    <p>{shopCartItem.item.time}</p>
                                                                    <div className="count__div">
                                                                        <p>{shopCartItem.count} Product(s)</p>
                                                                        <p>£{shopCartItem.item.price}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="quantity">
                                                                <button onClick={() => { decreaseShopCart(shopCartItem.item) }}><i class="fa-solid fa-caret-left"></i></button>
                                                                <p>{shopCartItem.count}</p>
                                                                <button onClick={() => { increaseShopCart(shopCartItem.item) }}><i class="fa-solid fa-caret-right"></i></button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="totalprice">
                                                                <p>£{shopCartItem.totalPrice}</p>
                                                                <button onClick={() => { removeFromShopCart(shopCartItem.item) }}><i class="fa-solid fa-xmark"></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            ) : (
                                <h1 style={{ fontSize: "20px", fontWeight: "400", lineHeight: "23.6px", color: "#333333", marginBottom: "40px" }}>Your cart is empty...</h1>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="custom-container shopBasket__total__cont">
                <div className="row shopBasket__total__row">
                    <div className="col-10 shopBasket__total__col">
                        <h3>Total</h3>
                        <p>£{sum}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table