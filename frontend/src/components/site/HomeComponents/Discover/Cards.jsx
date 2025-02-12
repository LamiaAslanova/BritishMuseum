import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'


const Cards = ({ exhibitions }) => {
    return (
        <div className="custom-container discover__bottom">
            <div className="row discover__bottom__title">
                <div className="col-12 discover__bottom__title__col">
                    <h2>Exhibitions and events</h2>
                    <Link to='exhibitions-events' className='see__ex'><p>See all exhibitions and events</p><i class="fa-solid fa-circle-chevron-right"></i></Link>
                </div>
            </div>
            <div className="row discover__bottom__cards">
                {
                    exhibitions.filter(item => item.category === 'Special').slice(0, 2).map((exhibition, index) => {
                        return (
                            <Card key={index} exhibition={exhibition} />
                        )
                    })
                }
            </div>
            <div className="row see__ex__button__row">
                <div className="col-12 see__ex__button__col">
                    <Link to='exhibitions-events' className='see__ex__button'>
                        <span>See all exhibitions and events</span>
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cards