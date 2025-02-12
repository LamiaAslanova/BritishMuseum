import React, { useContext } from 'react'
import './ExBody.css'
import { Link } from 'react-router-dom'
import MainContext from '../../../../context/context'

const ExBody = ({ item }) => {

    const { addToCart } = useContext(MainContext)

    return (
        <div id="exBody">
            <div className="custom-container exBody__cont">
                <div className="row exBody__row">
                    <div className="col-8 exBody__col8">
                        <h3>{item.desc}</h3>
                        <p style={{ whiteSpace: 'pre-wrap' }}>{item.additionalDesc}</p>
                    </div>
                    <div className="col-4 exBody__col4">
                        <div className="exBody__col4__piece" id='topmost'>
                            <div className="piece__top">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p>{item.date}</p>
                            </div>
                            <div className="piece__bottom">
                                <p>{item.time}</p>
                            </div>
                        </div>
                        <div className="exBody__col4__piece">
                            <div className="piece__top">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>Room {item.room}</p>
                            </div>
                            <div className="piece__bottom">
                                <p>{item.roomName}</p>
                                <a href='https://www.britishmuseum.org/sites/default/files/2024-01/British-Museum-map-January-2024.pdf' target="_blank">Find Room {item.room}</a>
                            </div>
                        </div>
                        <div className="exBody__col4__piece">
                            <div className="piece__top">
                                <svg fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.906 11.541l3.551 3.553 6.518-6.518-3.553-3.551-6.516 6.516zm14.198-4.877l-1.511-1.512a2.024 2.024 0 0 1-2.747-2.746L13.335.894a1.017 1.017 0 0 0-1.432 0L.893 11.904a1.017 1.017 0 0 0 0 1.432l1.512 1.51a2.024 2.024 0 0 1 2.747 2.748l1.512 1.51a1.015 1.015 0 0 0 1.432 0L19.104 8.096a1.015 1.015 0 0 0 0-1.432zM8.457 16.719l-5.176-5.178L11.423 3.4l5.176 5.176-8.142 8.143z"></path></g></svg>
                                <p>Tickets</p>
                            </div>
                            <div className="piece__bottom">
                                <p>£{item.price}</p>
                            </div>
                        </div>
                        <div className="exBody__col4__button">
                            <Link onClick={() => { addToCart(item) }}>
                                <span>Add to cart</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExBody