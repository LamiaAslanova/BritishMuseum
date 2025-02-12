import React from 'react'
import './Body.css'
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const VisitBody = () => {
    return (
        <div id="visitBody">
            <div className="custom-container visitBody__cont">
                <div className="row visitBody__row">
                    <div className="col-8 visitBody__col8">
                        <h3>Immerse yourself in two million years of human history, art and culture.</h3>
                        <p style={{ whiteSpace: 'pre-wrap' }}>
                            Book your free ticket for Museum entry in advance to receive key information and updates before your visit and priority entry during busy periods. In our galleries come face-to-face with objects from the Sutton Hoo ship burial, explore the wonderful collection of the Islamic world and learn more about Egyptian mummies.
                        </p>
                        <p>Exhibition tickets are available to book for:</p>
                        <ul>
                            <li>
                                <RouterLink>Michelangelo: the last decades</RouterLink><span>(until 28 July 2024)</span>
                            </li>
                            <li>
                                <RouterLink>Silk Roads</RouterLink><span>(26 September 2024 - 23 February 2025)</span>
                            </li>
                        </ul>
                        <p>
                            In line with current government and NHS guidance, face masks are not mandatory but visitors are welcome to wear them if they wish. The Museum maintains a robust cleaning schedule and hand sanitiser stations are available across the site.
                        </p>
                        <p>
                            Occasionally we may need to close galleries at short notice. We regret that we are not always able to alert visitors in advance of their visit.
                        </p>
                        <p>We look forward to welcoming you.</p>
                    </div>
                    <div className="col-4 visitBody__col4">
                        <div className="visitBody__col4__piece" id='topmost'>
                            <div className="piece__bottom">
                                <h2>Free entry</h2>
                            </div>
                        </div>
                        <div className="visitBody__col4__piece">
                            <div className="piece__top">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <p>Opening times</p>
                            </div>
                            <div className="piece__bottom">
                                <p>Daily: 10.00-17.00 (Fridays: 20.30)</p>
                            </div>
                        </div>
                        <div className="visitBody__col4__piece">
                            <div className="piece__top">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>The British Museum</p>
                            </div>
                            <div className="piece__bottom">
                                <p>Great Russell Street, London, WC1B 3DG</p>
                                <p>See <ScrollLink to='map' smooth={true} duration={500}>getting here</ScrollLink></p>
                            </div>
                        </div>
                        <div className="visitBody__col4__button">
                            <RouterLink to='/exhibitions-events'>
                                <span>Book tickets</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </RouterLink>
                            <a href='https://www.britishmuseum.org/sites/default/files/2024-01/British-Museum-map-January-2024.pdf' target='_blank'>
                                <span>View Museum map</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitBody