import React, { useContext } from 'react';
import './ShopCategory.css';
import CatCards from '../../../components/site/ShopCatComponents/CatCards/CatCards';
import { useParams } from 'react-router';
import MainContext from '../../../context/context';

const ShopCategory = () => {

    const { shop, sort, search } = useContext(MainContext);

    const { category } = useParams();

    const filteredProducts = shop.filter(item => item.category === category);

    return (
        <main>
            <CatCards filteredProducts={filteredProducts.filter(x => x.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
                if (!sort) {
                    return 0
                }
                else if (sort.asc == true) {
                    return (a[sort.field] > b[sort.field]) ? 1 : ((b[sort.field] > a[sort.field]) ? -1 : 0)
                }
                else if (sort.asc == false) {
                    return (a[sort.field] < b[sort.field]) ? 1 : ((b[sort.field] < a[sort.field]) ? -1 : 0)
                }
            })} />
        </main>
    );
}

export default ShopCategory;
