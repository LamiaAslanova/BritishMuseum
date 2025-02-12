import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="errorHero">
            <div className="errorHero__overlay">
                <div className="custom-container errorHero__main__cont">
                    <div className="row errorHero__main__row">
                        <div className="col-12 errorHero__main__col">
                            <h1>Sorry we can't find that page...</h1>
                            <Link to='/'>
                                <span>Go to homepage</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero