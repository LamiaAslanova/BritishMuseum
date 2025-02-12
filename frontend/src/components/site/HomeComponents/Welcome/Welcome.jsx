import React, { useContext } from 'react'
import './Welcome.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom'
import MainContext from '../../../../context/context'
import { event } from 'jquery'

const Welcome = ({ shop }) => {

    const { shuffleArray } = useContext(MainContext)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false,
                    dots: true
                }
            }
        ]
    }

    return (
        <div className="welcome">
            <div className="custom-container welcome__cont">
                <div className="row welcome__title">
                    <div className="col-12 welcome__title__col">
                        <h2>Welcome to the British Museum Shop</h2>
                        <Link to='shop' className='shop__now'><p>Shop now</p><i class="fa-solid fa-circle-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        shuffleArray(shop).slice(0, 7).map((product, index) => {
                            return (
                                <Link key={index} className='single__item' to={`/shop-details/${product._id}`}>
                                    <img src={product.images[0]} alt="" />
                                    <h3>{product.title}</h3>
                                </Link>
                            )
                        })
                    }
                </Slider>
            </div>
            <Link to='shop' className='shop__now__button'>
                <span>Shop now</span>
                <i class="fa-solid fa-circle-chevron-right"></i>
            </Link>
        </div>
    );
}

export default Welcome