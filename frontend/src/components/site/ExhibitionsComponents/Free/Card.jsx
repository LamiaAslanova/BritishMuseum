import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../../../context/context'

const Card = ({ exhibition }) => {

    const { getDetailPath } = useContext(MainContext)

    const detailPath = getDetailPath(exhibition.category, exhibition._id)

    return (
        <>
            <div className="col-4 single__card__col">
                <Link to={detailPath} className="card single__card">
                    <div className="card-body card__top">
                        <div className="card__top__top">
                            <h3>{exhibition.title}</h3>
                        </div>
                        <div className="card__top__bottom">
                            <div className="card__top__bottom__left">
                                <p>Exhibition</p>
                                <p>{exhibition.date}</p>
                            </div>
                            <div className='card__top__bottom__right'>
                                <div>Free</div>
                            </div>
                        </div>
                    </div>
                    <div className="card__bottom">
                        <img src={exhibition.image} alt="" />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card