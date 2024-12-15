import React, { useContext } from 'react'
import './AllEvents.css'
import Card from './Card'
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import HeadingMain from '../../../components/site/ExhibitionsComponents/Heading/HeadingMain'

const AllEvents = () => {

    const { events, dropdownHeight, shuffleArray } = useContext(MainContext)

    return (
        <div className="allEv">
            <Helmet>
                <title>All events | British Museum</title>
            </Helmet>
            <div className="custom-container allEv__cont">
                <div className="row allEv__title__row" style={{ marginBottom: `${dropdownHeight}px` }}>
                    <div className="col-12 allEv__title__col">
                        <h1>Events</h1>
                        <HeadingMain />
                    </div>
                </div>
            </div>
            <div className="results">
                <div className="custom-container results__cont">
                    <div className="row results__row">
                        <div className="col-12 results__col">
                            <p>Showing results for:</p>
                            <Link to='/exhibitions-events'>
                                <i class="fa-solid fa-circle-xmark"></i>
                                <span>All events</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-container allEv__cards__cont">
                <div className="row allEv__cards">
                    {
                        shuffleArray(events).map((event, index) => {
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

export default AllEvents