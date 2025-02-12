import React from 'react'
import Turtle from '../../../assets/images/footer-turtle.png'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <div className="custom-container footer__top__cont">
        <div className="row footer__top">
          <div className="col-6 footer__top__left">
            <h2>Connect with us</h2>
            <div className="social__media">
              <a target='_blank' href='https://www.facebook.com/britishmuseum'><i class="fa-brands fa-facebook-f"></i></a>
              <a target='_blank' href='https://x.com/britishmuseum'><i class="fa-brands fa-x-twitter"></i></a>
              <a target='_blank' href='https://www.instagram.com/britishmuseum/'><i class="fa-brands fa-instagram"></i></a>
              <a target='_blank' href='https://www.youtube.com/user/britishmuseum'><i class="fa-brands fa-youtube"></i></a>
              <a target='_blank' href='https://weibo.com/britishmuseumlondon'><i class="fa-brands fa-weibo"></i></a>
              <a target='_blank' href='https://www.wechat.com/mobile'><i class="fa-brands fa-weixin"></i></a>
            </div>
          </div>
          <div className="col-6 footer__top__right">
            <p>Enter your email address to receive our newsletter</p>
            <form action="#">
              <input type="text" />
              <button>Sign up</button>
            </form>
            <button className='scrollTo' onClick={scrollToTop}>Back to the top<i class="fa-solid fa-circle-chevron-up"></i></button>
          </div>
        </div>
      </div>
      <div className="custom-container footer__middle__cont">
        <div className="row footer__middle">
          <div className="col-3 footer__col special__footer__col">
            <div className="footer__col__piece">
              <h3>Free entry</h3>
              <p>Great Russell Street <br />London WC1B 3DG</p>
              <p className='footer__number'>+44 (0)20 7323 8000</p>
            </div>
            <div className="footer__col__piece">
              <h3>Opening hours</h3>
              <p>Daily: 10.00-17.00 (Fridays: 20.30) <br />Last entry: 16.45 (Fridays: 20.15)</p>
            </div>
            <img src={Turtle} />
          </div>
          <div className="col-3 footer__col">
            <div className="footer__col__piece">
              <h3>About us</h3>
              <ul>
                <li>
                  <Link>Governance</Link>
                </li>
                <li>
                  <Link>The British Museum story</Link>
                </li>
                <li>
                  <Link>Jobs</Link>
                </li>
                <li>
                  <Link>Press</Link>
                </li>
                <li>
                  <Link>Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col__piece">
              <h3>Our work</h3>
              <ul>
                <li>
                  <Link>Departments</Link>
                </li>
                <li>
                  <Link>National</Link>
                </li>
                <li>
                  <Link>International</Link>
                </li>
                <li>
                  <Link>How to borrow</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 footer__col">
            <div className="footer__col__piece">
              <h3>Visit</h3>
              <ul>
                <li>
                  <Link>Museum map</Link>
                </li>
                <li>
                  <Link>Exhibitions and events</Link>
                </li>
                <li>
                  <Link>Accessibility</Link>
                </li>
                <li>
                  <Link>Food and drink</Link>
                </li>
                <li>
                  <Link>Audio guide</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col__piece">
              <h3>Research</h3>
              <ul>
                <li>
                  <Link>Research projects</Link>
                </li>
                <li>
                  <Link>Research publications</Link>
                </li>
                <li>
                  <Link>Scientific studies</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 footer__col footer__last__col">
            <div className="footer__col__piece">
              <h3>Commercial</h3>
              <ul>
                <li>
                  <Link>Commercial hire</Link>
                </li>
                <li>
                  <Link>Filming</Link>
                </li>
                <li>
                  <Link>BM Images</Link>
                </li>
                <li>
                  <Link>Licensing</Link>
                </li>
                <li>
                  <Link>British Museum Press</Link>
                </li>
                <li>
                  <Link>Travel trade tours</Link>
                </li>
              </ul>
            </div>
            <div className="footer__col__piece">
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link>Study rooms</Link>
                </li>
                <li>
                  <Link>Library and archive</Link>
                </li>
                <li>
                  <Link>Search the collection</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_b">
        <div className="custom-container footer__bottom__cont">
          <div className="row footer__bottom">
            <div className="col-12 footer__bottom__col">
              <ul>
                <li>
                  <Link>Privacy policy</Link>
                </li>
                <li>
                  <Link>Cookies</Link>
                </li>
                <li>
                  <Link>Accessibility statement</Link>
                </li>
                <li>
                  <Link>Terms of use</Link>
                </li>
                <li>
                  <Link>Modern Slavery Act Statement</Link>
                </li>
                <li>
                  <Link>Chinese site 中文</Link>
                </li>
                <li>
                  <p>© 2024 The Trustees of the British Museum</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer