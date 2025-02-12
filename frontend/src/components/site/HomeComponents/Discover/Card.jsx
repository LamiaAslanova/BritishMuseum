import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ exhibition }) => {
    return (
        <>
            <div className="col-6 single__card__col">
                <Link to={`/exhibition-details/${exhibition._id}`} className="card single__card">
                    <div className="card-body card__left">
                        <div className="card__left__top">
                            <p>A British Museum Touring Exhibition</p>
                            <h3>{exhibition.title}</h3>
                        </div>
                        <div className="card__left__bottom">
                            <p>{exhibition.date}</p>
                            <div>Book now</div>
                        </div>
                    </div>
                    <div className="card__right">
                        <img src={exhibition.image} alt="" />
                    </div>
                </Link>
            </div >
        </>
    )
}

export default Card