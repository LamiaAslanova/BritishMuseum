import React from 'react'
import './EvHero.css'
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from 'react-helmet';

const EvHero = ({ item }) => {
  return (
    <div className="evHero" style={{ backgroundImage: `url(${item.image})` }}>
      <Helmet>
        <title>{`${item.title} | British Museum`}</title>
      </Helmet>
      <div className="evHero__main">
        <div className="custom-container evHero__cont">
          <div className="row evHero__row">
            <div className="col-12 evHero__col">
              <div className="evHero__content">
                <h1>{item.title}</h1>
                <span className='evHero__content__span'>{item.type} / {item.date}</span>
                <ScrollLink to='evBody' smooth={true} duration={500}>
                  <span>Book now</span>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="evHero__mini">
        <div className="custom-container evHero__mini__cont">
          <div className="row evHero__mini__row">
            <div className="col-12 evHero__mini__col">
              <div className="evHero__mini__left">
                <RouterLink to='/'>Home</RouterLink>
                <i class="fa-solid fa-chevron-right"></i>
                <RouterLink to='/exhibitions-events'>Exhibitions and events</RouterLink>
                <i class="fa-solid fa-chevron-right"></i>
                <p>{item.title}</p>
              </div>
              <div className="evHero__mini__right">
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

export default EvHero