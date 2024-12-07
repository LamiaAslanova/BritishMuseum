import React from 'react'
import './Description.css'
import { Link } from 'react-scroll'

const Description = () => {
    return (
        <div className="description">
            <div className="custom-container description__cont">
                <div className="row description__row">
                    <div className="col-8 description__col8">
                        <h3>
                            Get closer to the British Museum collection and immerse yourself in two million years of history, across six continents.
                        </h3>
                        <p>
                            Collection online allows access to almost four and a half million objects in more than two million records. High definition images can be enlarged and examined in detail which will enable you to view the incredible workmanship on the Royal Game of Ur, or the intricate carving on this African hunting horn - just a few of the thousands of highlights to discover.
                        </p>
                        <p id='last__p'>
                            Enjoy exploring the collection - from some of the earliest objects created by humankind to works by contemporary artists. Or choose from the curated collections below, which reveal the fascinating stories that transcend time.
                        </p>
                    </div>
                    <div className="col-4 description__col4">
                        <div className="description__col4__piece" id='topmost'>
                            <Link to='Americas' smooth={true} duration={500}>
                                <span>Americas</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </Link>
                        </div>
                        <div className="description__col4__piece">
                            <Link to='Animals' smooth={true} duration={500}>
                                <span>Animals</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </Link>
                        </div>
                        <div className="description__col4__piece">
                            <Link to='China' smooth={true} duration={500}>
                                <span>China</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </Link>
                        </div>
                        <div className="description__col4__piece">
                            <Link to='Death and memory' smooth={true} duration={500}>
                                <span>Death and memory</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </Link>
                        </div>
                        <div className="description__col4__piece">
                            <Link to='Africa' smooth={true} duration={500}>
                                <span>Africa</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </Link>
                        </div>
                        <div className="description__col4__piece" id='lowest'>
                            <Link to='Egypt' smooth={true} duration={500}>
                                <span>Egypt</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description