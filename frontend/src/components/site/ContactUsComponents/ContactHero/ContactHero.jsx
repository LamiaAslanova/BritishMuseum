import React from 'react'
import { Link } from 'react-router-dom'
import './ContactHero.css'

const ContactHero = () => {
    return (
        <div className="contactHero" >
            <div className="contactHero__overlay">
                <div className="custom-container contactHero__main__cont">
                    <div className="row contactHero__main__row">
                        <div className="col-12 contactHero__main__col">
                            <h1>Contact us</h1>
                        </div>
                    </div>
                </div>
                <div className="contactHero__mini">
                    <div className="custom-container contactHero__mini__cont">
                        <div className="row contactHero__mini__row">
                            <div className="col-12 contactHero__mini__col">
                                <div className="contactHero__mini__left">
                                    <Link to='/'>Home</Link>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <p>Contact us</p>
                                </div>
                                <div className="contactHero__mini__right">
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
        </div>
    )
}

export default ContactHero
