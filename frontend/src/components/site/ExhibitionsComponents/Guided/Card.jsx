import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ event }) => {
    return (
        <>
            <Link to={`/event-details/${event._id}`} className="col-4 single__card__col">
                <div className="card single__card">
                    <div className="card__top">
                        <img src={event.image} alt="" />
                    </div>
                    <div className="card-body card__bottom">
                        <div className="card__bottom__top">
                            <div className="card__bottom__top__left">
                                <div className='performance'>
                                    <i class="fa-solid fa-building-columns"></i><span>{event.type}</span>
                                </div>
                                <ul>
                                    <li><svg fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.906 11.541l3.551 3.553 6.518-6.518-3.553-3.551-6.516 6.516zm14.198-4.877l-1.511-1.512a2.024 2.024 0 0 1-2.747-2.746L13.335.894a1.017 1.017 0 0 0-1.432 0L.893 11.904a1.017 1.017 0 0 0 0 1.432l1.512 1.51a2.024 2.024 0 0 1 2.747 2.748l1.512 1.51a1.015 1.015 0 0 0 1.432 0L19.104 8.096a1.015 1.015 0 0 0 0-1.432zM8.457 16.719l-5.176-5.178L11.423 3.4l5.176 5.176-8.142 8.143z"></path></g></svg><span>£10</span></li>
                                    <li><i class="fa-solid fa-calendar-days"></i><span>{event.date}</span></li>
                                </ul>
                            </div>
                            <div className='card__bottom__top__right'>
                                <div>Book now</div>
                            </div>
                        </div>
                        <div className="card__bottom__bottom">
                            <h3>{event.title}</h3>
                            <p>{event.miniDesc}</p>
                            <div className='card__bottom__bottom__book'>
                                <span>Book now</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card