import React from 'react'
import './Hero.css'
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const VisitHero = () => {
    return (
        <div className="visitHero" >
            <div className="visitHero__overlay">
                <div className="custom-container visitHero__main__cont">
                    <div className="row visitHero__main__row">
                        <div className="col-12 visitHero__main__col">
                            <h1>Plan your visit</h1>
                            <RouterLink to='/basket'>
                                <span>Book now</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div className="visitHero__mini">
                    <div className="custom-container visitHero__mini__cont">
                        <div className="row visitHero__mini__row">
                            <div className="col-12 visitHero__mini__col">
                                <div className="visitHero__mini__left">
                                    <RouterLink to='/'>Home</RouterLink>
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <p>Visit</p>
                                </div>
                                <div className="visitHero__mini__right">
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

export default VisitHero