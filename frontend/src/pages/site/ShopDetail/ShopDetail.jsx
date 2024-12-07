import React, { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ShopDetail.css';
import 'react-tabs/style/react-tabs.css';
import Delivery from '../../../components/site/ShopComponents/DeliveryInfo/Delivery';
import { useParams } from 'react-router';
import axios from 'axios';
import ShopCart from '../../../components/site/ShopComponents/ShopCartLink/ShopCartLink';
import MainContext from '../../../context/context';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ShopDetail = () => {
    useEffect(() => {
        $(document).ready(function () {
            $('.slider').slick({
                prevArrow: '<a class="slick-prev" href="#"><i data-icon="ei-arrow-left" data-size="m"></i></a>',
                nextArrow: '<a class="slick-next" href="#"><i data-icon="ei-arrow-right" data-size="m"></i></a>'
            });
        });
    }, []);

    const [item, setItem] = useState({})
    const { id } = useParams()
    const { addToShopCart } = useContext(MainContext)
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decreaseQuantity = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

    const handleAddToBasket = () => {
        addToShopCart({ ...item, quantity });
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/shop/${id}`)
            .then(res => {
                setItem(res.data)
            })
    }, [])

    return (
        <div className="shopdet">
            <Helmet>
                <title>{`${item.title} | British Museum`}</title>
            </Helmet>
            <div className="custom-container shopCart__cont">
                <div className="row shopCart__row">
                    <div className="col-10 shopCart__col">
                        <ShopCart />
                    </div>
                </div>
            </div>
            <div className="custom-container shopdet__mini__cont">
                <div className="row shopdet__mini__row">
                    <div className="col-10 shopdet__mini__col">
                        <Delivery />
                    </div>
                </div>
            </div>
            <div className="custom-container shopdet__heading__cont">
                <div className="row shopdet__heading__row">
                    <div className="col-10 shopdet__path">
                        <Link to='/shop'>Shop</Link>
                        <span>/</span>
                        <p>{item.title}</p>
                    </div>
                    <div className="col-10 shopdet__title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            </div>
            <div className="custom-container shopdet__cont">
                <div className="row shopdet__row">
                    <div className="col-10 shopdet__col">
                        <div className="row shopdet__row2">
                            <div className="col-9 det__left">
                                <div className="layout">
                                    <ul className="slider">
                                        <li>
                                            <img src={item.image} />
                                        </li>
                                        <li>
                                            <img src={item.additionalImage} />
                                        </li>
                                    </ul>
                                </div>
                                <div className="tabs">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">About</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Product Information</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                            <p style={{ whiteSpace: 'pre-wrap' }}>{item.about}</p>
                                        </div>
                                        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                            <div className="row tabpane__row">
                                                <div className="col-6 tabpane__col">
                                                    <span>WEIGHT:</span>
                                                    <p>{item.weight}kq</p>
                                                </div>
                                                <div className="col-6 tabpane__col">
                                                    <span>DIMENSIONS:</span>
                                                    <p>{item.dimensions}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 det__right">
                                <div className="det__content">
                                    <h2>£{item.price}</h2>
                                    <div className="quantity">
                                        <div className="quantity__title">
                                            <p>Quantity</p>
                                        </div>
                                        <div className="quantity__func">
                                            <button onClick={decreaseQuantity}><i class="fa-solid fa-caret-left"></i></button>
                                            <p>{quantity}</p>
                                            <button onClick={increaseQuantity}><i class="fa-solid fa-caret-right"></i></button>
                                        </div>
                                    </div>
                                    <button onClick={handleAddToBasket} className='addtobasket__button'>Add to basket</button>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Delivery
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li>Free standard UK delivery on orders over £100.</li>
                                                        <li>Premium delivery is available for UK orders only. Orders placed before 1pm UK time Monday-Friday will be dispatched on the same day for next working day delivery. Orders placed after 1pm will be dispatched the following working day.</li>
                                                        <li>Charges are calculated depending on the weight (kg) and destination of your order.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Returns
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <p>If you are not entirely happy with anything you have purchased from the online shop, please contact Customer Services within 14 days of delivery.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopDetail;
