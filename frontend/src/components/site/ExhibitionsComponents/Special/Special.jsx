import React from 'react'
import './Special.css'
import Card from './Card'
import { Link } from 'react-router-dom'

const Special = ({ exhibitions }) => {

    return (
        <div className="special">
            <div className="custom-container special__cont">
                <div className="row special__title">
                    <div className="col-12 special__title__col">
                        <h2>Special exhibitions</h2>
                        <Link to='/all-exhibitions' className='see__ex'><p>Browse all exhibitions</p><i class="fa-solid fa-circle-chevron-right"></i></Link>
                    </div>
                </div>
                <div className="row special__cards">
                    {
                        exhibitions.filter(item => item.category === 'Special').slice(0, 3).map((exhibition, index) => {
                            return (
                                <Card key={index} exhibition={exhibition} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Special