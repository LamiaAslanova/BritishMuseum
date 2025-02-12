import React from 'react'
import './Americas.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Americas = ({ items }) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0
    };

    return (
        <div className="americas">
            <div className="custom-container americas__cont">
                <div className="row americas__title">
                    <div className="col-12 americas__title__col">
                        {
                            items.slice(0, 1).map((item, index) => {
                                return (
                                    <h2 id={item.category} key={index}>{item.category}</h2>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        items.map((item, index) => {
                            return (
                                <div key={index} className='single__carousel'>
                                    <img src={item.image} alt="" />
                                    <h3>{item.title}</h3>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Americas