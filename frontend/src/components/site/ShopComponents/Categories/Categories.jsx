import React from 'react';
import './Categories.css';
import replicas from "../../../../assets/images/replicas.jpg";
import jewellery from "../../../../assets/images/jewellery.jpg";
import books from "../../../../assets/images/books.jpg";
import fashion from "../../../../assets/images/fashion.jpg";
import homeware from "../../../../assets/images/homeware.jpg";
import children from "../../../../assets/images/children.jpg";
import lewis from "../../../../assets/images/lewis.jpg";
import rosetta from "../../../../assets/images/rosetta.jpg";
import hokusai from "../../../../assets/images/hokusai.jpg";
import games from "../../../../assets/images/games.jpg";
import cats from "../../../../assets/images/cats.jpg";
import peter from "../../../../assets/images/peter.jpg";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Categories = () => {
    const categories = [
        { name: "Replicas", img: replicas },
        { name: "Jewellery", img: jewellery },
        { name: "Books", img: books },
        { name: "Fashion", img: fashion },
        { name: "Homeware", img: homeware },
        { name: "Children", img: children },
        { name: "Lewis Chessman", img: lewis },
        { name: "Rosetta", img: rosetta },
        { name: "Hokusai", img: hokusai },
        { name: "Games", img: games },
        { name: "Cats", img: cats },
        { name: "Peter Rabbit", img: peter },
    ];

    return (
        <div className="categories">
            <Helmet>
                <title>Shop | British Museum</title>
            </Helmet>
            <div className="custom-container categories__cont">
                <div className="row categories__row">
                    <div className="col-10">
                        <div className="row">
                            {categories.map((category, index) => (
                                <div key={index} className="col-4 category__col">
                                    <Link to={`/shop-category/${category.name}`} className='category'>
                                        <img src={category.img} alt={category.name} />
                                        <div className="category__caption">
                                            <h3>{category.name}</h3>
                                            <span><p>Shop now</p> <i className='fa fa-long-arrow-right'></i></span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
