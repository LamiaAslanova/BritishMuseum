import React from 'react'
import Card from './Card'
import './Highlight.css'
import { Link } from 'react-router-dom'

const Highlight = ({ events }) => {

    return (
        <div className="highlight">
            <div className="custom-container highlight__cont">
                <div className="row highlight__title">
                    <div className="col-12 highlight__title__col">
                        <h2>Highlight events</h2>
                        <Link to='/all-events' className='see__ev'><p>Browse all events</p><i class="fa-solid fa-circle-chevron-right"></i></Link>
                    </div>
                </div>
                <div className="row highlight__cards">
                    {
                        events.filter(item => item.category === 'Highlight').slice(0, 3).map((event, index) => {
                            return (
                                <Card key={index} event={event} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Highlight