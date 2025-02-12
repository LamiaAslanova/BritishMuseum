import React from 'react'
import './ExHero.css'
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from 'react-helmet';

const ExHero = ({ item }) => {
  return (
    <div className="exHero" style={{ backgroundImage: `url(${item.image})` }}>
      <Helmet>
        <title>{`${item.title} | British Museum`}</title>
      </Helmet>
      <div className="exHero__main">
        <div className="custom-container exHero__cont">
          <div className="row exHero__row">
            <div className="col-12 exHero__col">
              <div className="exHero__content">
                <h1>{item.title}</h1>
                <span className='exHero__content__span'>Exhibition / {item.date}</span>
                <ScrollLink to='exBody' smooth={true} duration={500}>
                  <span>Book now</span>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </ScrollLink>
                <span className='exHero__content__span'>Supported by</span>
                <p>{item.suppBy}</p>
                <span className='exHero__content__span'>With additional support from</span>
                <p className='content__last__p'>{item.additionalSuppBy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exHero__mini">
        <div className="custom-container exHero__mini__cont">
          <div className="row exHero__mini__row">
            <div className="col-12 exHero__mini__col">
              <div className="exHero__mini__left">
                <RouterLink to='/'>Home</RouterLink>
                <i class="fa-solid fa-chevron-right"></i>
                <RouterLink to='/exhibitions-events'>Exhibitions and events</RouterLink>
                <i class="fa-solid fa-chevron-right"></i>
                <p>{item.title}</p>
              </div>
              <div className="exHero__mini__right">
                <p>Share the page</p>
                <ul>
                  <li><a target='_blank' href='https://www.facebook.com/britishmuseum'><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a target='_blank' href='https://x.com/britishmuseum'><i class="fa-brands fa-x-twitter"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExHero