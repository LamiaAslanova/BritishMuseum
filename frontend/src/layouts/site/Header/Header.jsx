import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MainContext from '../../../context/context'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../../Services/redux/Slices/userSlice'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'

const Header = () => {

    const { cartItems, isDropdownVisible, toggleDropdown, closeDropdown, buttonRef, dropdownRef } = useContext(MainContext)

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    return (
        <>
            <header>
                <div className="custom-container">
                    <div className="header">
                        <div className="header__left">
                            <Link to='/'>
                                <img src="https://www.britishmuseum.org/themes/custom/numiko/dist/img/british-museum-logo.svg" alt="" />
                            </Link>
                        </div>
                        <div className="header__right">
                            <div className="header__right__top">
                                <ul>
                                    <li className='headerTop__li'>
                                        <Link className='' to='basket'>
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            <p>Cart ({user.id ? cartItems.length : "0"})</p>
                                        </Link>
                                    </li>
                                    <li className='profile' ref={dropdownRef}>
                                        <button className='profile__button' ref={buttonRef} onClick={toggleDropdown}>
                                            <i class="fa-solid fa-user"></i>
                                            <p>Profile</p>
                                        </button>
                                        {
                                            user.id && (
                                                <>
                                                    <div className={`dropdown__users ${isDropdownVisible ? 'show' : ''}`}>
                                                        <Link onClick={closeDropdown} to="/user">
                                                            User
                                                        </Link>
                                                        <button onClick={() => {
                                                            Swal.fire({
                                                                title: "Are you sure?",
                                                                text: "You're about to sign out",
                                                                icon: "warning",
                                                                showCancelButton: true,
                                                                confirmButtonColor: "#3085d6",
                                                                cancelButtonColor: "#d33",
                                                                confirmButtonText: "Yes, sign out!"
                                                            }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    dispatch(signOut());
                                                                    Cookies.remove('token');
                                                                    closeDropdown;
                                                                    Swal.fire({
                                                                        title: "Has been signed out!",
                                                                        text: "You're signed out.",
                                                                        icon: "success"
                                                                    });
                                                                }
                                                            });
                                                        }}>
                                                            Sign out
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            !user.id && (
                                                <>
                                                    <div className={`dropdown__users ${isDropdownVisible ? 'show' : ''}`}>
                                                        <Link onClick={closeDropdown} to="/sign-up">
                                                            Sign Up
                                                        </Link>
                                                        <Link onClick={closeDropdown} to="/sign-in">
                                                            Sign In
                                                        </Link>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </li>
                                </ul>
                            </div>
                            <div className="header__right__bottom">
                                <nav>
                                    <ul>
                                        <li><Link to='visit'>Visit</Link></li>
                                        <li><Link to='exhibitions-events'>Exhibitions and events</Link></li>
                                        <li><Link to='collection'>Collection</Link></li>
                                        <li><Link className='rightmost' to='shop'>Shop</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <button class="btn btn-primary menuBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i class="fa-solid fa-bars"></i>Menu</button>
                            <div className="header__right__offcanvas">
                                <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        ...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header