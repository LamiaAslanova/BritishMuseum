import React, { useContext } from 'react';
import './CatCards.css';
import { Link } from 'react-router-dom';
import Delivery from '../../ShopComponents/DeliveryInfo/Delivery';
import ShopCart from '../../ShopComponents/ShopCartLink/ShopCartLink';
import MainContext from '../../../../context/context';
import { Helmet } from 'react-helmet';

const CatCards = ({ filteredProducts }) => {

  const { handleSortChange, search, setSearch } = useContext(MainContext)

  return (
    <div className="catCards">
      <div className="custom-container shopCart__cont">
        <div className="row shopCart__row">
          <div className="col-8 shopCart__col">
            <ShopCart />
          </div>
        </div>
      </div>
      <div className="custom-container catCards__mini__cont">
        <div className="row catCards__mini__row">
          <div className="col-8 catCards__mini__col">
            <Delivery />
          </div>
        </div>
      </div>
      <div className="custom-container catCards__cont">
        <div className="row catCards__row">
          <div className="col-8">
            <div className="row">
              <div className="col-6 catCards__col__left">
                <input type="text" placeholder='Search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
              </div>
              <div className="col-6 catCards__col__right">
                <p>Sort By</p>
                <select name="sort" id="sort" onChange={handleSortChange}>
                  <option value="default">Default</option>
                  <option value="a-z">Name: A-Z</option>
                  <option value="z-a">Name: Z-A</option>
                  <option value="low-to-high">Price: low to high</option>
                  <option value="high-to-low">Price: high to low</option>
                </select>
              </div>
            </div>
            <div className="row">
              {
                filteredProducts.map((product, index) => {
                  return (
                    <div key={index} className="col-4 catCards__col4">
                      <Helmet>
                        <title>{`${product.category} | British Museum`}</title>
                      </Helmet>
                      <div className="card single__card">
                        <Link to={`/shop-details/${product._id}`} className="card__top">
                          <img src={product.images[0]} />
                        </Link>
                        <div className="card-body card__bottom">
                          <Link to={`/shop-details/${product._id}`}>{product.title}</Link>
                          <p>£{product.price}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatCards;
