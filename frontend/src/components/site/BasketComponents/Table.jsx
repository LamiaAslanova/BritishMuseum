import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Table = ({ cartItems }) => {

  const { increaseCart, decreaseCart, removeFromCart } = useContext(MainContext)
  let sum = 0

  return (
    <>
      <div className="custom-container basket__cont">
        <div className="row basket__row">
          <div className="col-12 basket__col">
            {
              cartItems && cartItems.length > 0 ? (
                <table class="table">
                  <tbody>
                    {
                      cartItems.map((cartItem, index) => {
                        sum += cartItem.totalPrice
                        return (
                          <tr key={index}>
                            <td>
                              <div className="tableitem">
                                <h3>{cartItem.item.title}</h3>
                                <div className="tableitem__bottom">
                                  <img src={cartItem.item.image} alt="" />
                                  <div className="tableitem__bottom__right">
                                    <p>{cartItem.item.date}</p>
                                    <p>{cartItem.item.time}</p>
                                    <div className="count__div">
                                      <p>{cartItem.count} Ticket(s)</p>
                                      <p>£{cartItem.item.price}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="quantity">
                                <button onClick={() => { decreaseCart(cartItem.item) }}><i class="fa-solid fa-caret-left"></i></button>
                                <p>{cartItem.count}</p>
                                <button onClick={() => { increaseCart(cartItem.item) }}><i class="fa-solid fa-caret-right"></i></button>
                              </div>
                            </td>
                            <td>
                              <div className="totalprice">
                                <p>£{cartItem.totalPrice}</p>
                                <button onClick={() => { removeFromCart(cartItem.item) }}><i class="fa-solid fa-xmark"></i></button>
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
      <div className="custom-container basket__total__cont">
        <div className="row basket__total__row">
          <div className="col-12 basket__total__col">
            <h3>Total</h3>
            <p>£{sum}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table