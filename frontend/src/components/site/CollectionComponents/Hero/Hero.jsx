import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__main">
                <div className="custom-container hero__main__cont">
                    <div className="row hero__main__row">
                        <div className="col-12 hero__main__col">
                            <h1>Explore the collection</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__mini">
                <div className="custom-container hero__mini__cont">
                    <div className="row hero__mini__row">
                        <div className="col-12 hero__mini__col">
                            <div className="hero__mini__left">
                                <Link to='/'>Home</Link>
                                <i class="fa-solid fa-chevron-right"></i>
                                <p>Collection</p>
                            </div>
                            <div className="hero__mini__right">
                                <p>Share the page</p>
                                <ul>
                                    <li><a target='_blank' href='https://www.facebook.com/britishmuseum'><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a target='_blank' href='https://x.com/britishmuseum'><i class="fa-brands fa-x-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero