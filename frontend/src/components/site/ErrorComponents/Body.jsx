import React from 'react'
import './Body.css'
import Photo1 from '../../../assets/images/Great-Court.jpg'
import Photo2 from '../../../assets/images/Michelangelo_teaser.jpg'
import Photo3 from '../../../assets/images/sutton-hoo-helmet-1920.jpg'
import Photo4 from '../../../assets/images/lewis-chessmen-carved-scotland-british-museum.jpg'
import { Link } from 'react-router-dom'

const Body = () => {
    return (
        <div className="errorBody">
            <div className="custom-container errorBody__heading__cont">
                <div className="row errorBody__heading__row">
                    <div className="col-6 errorBody__heading__col">
                        <h2>The page you requested no longer exists or the address was incorrect.</h2>
                        <p>Please use the navigation at the top of the page to find what you're looking for.</p>
                    </div>
                </div>
            </div>
            <div className="custom-container errorBody__cont">
                <div className="row errorBody__title">
                    <div className="col-12 errorBody__title__col">
                        <h2>Are you looking for...</h2>
                    </div>
                </div>
                <div className="row errorBody__cards">
                    <div className="col-3 single__card__col">
                        <Link to='/visit' className="card single__card">
                            <div className="card__top">
                                <img src={Photo1} alt="" />
                            </div>
                            <div className="card-body card__bottom">
                                <h4>Plan your visit</h4>
                                <p>Find travel, entry and facilities information and details of our Museum activities.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 single__card__col">
                        <Link to='/exhibitions-events' className="card single__card">
                            <div className="card__top">
                                <img src={Photo2} alt="" />
                            </div>
                            <div className="card-body card__bottom">
                                <h4>Exhibitions and events</h4>
                                <p>Discover our latest exhibitions and events, including 'Michelangelo: the last decades'.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 single__card__col">
                        <Link to='/collection' className="card single__card">
                            <div className="card__top">
                                <img src={Photo3} alt="" />
                            </div>
                            <div className="card-body card__bottom">
                                <h4>Collection</h4>
                                <p>Explore the British Museum collection and journey through two million years of human history.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 single__card__col">
                        <Link to='/shop' className="card single__card">
                            <div className="card__top">
                                <img src={Photo4} alt="" />
                            </div>
                            <div className="card-body card__bottom">
                                <h4>Shop</h4>
                                <p>From replicas to children's products, discover British Museum Shop.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="errorEmpty"></div>
        </div>
    )
}

export default Body