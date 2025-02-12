import React, { useContext } from 'react'
import Categories from '../../../components/site/ShopComponents/Categories/Categories'
import Top from '../../../components/site/ShopComponents/Top/Top'
import { Helmet } from 'react-helmet'

const Shop = () => {

  return (
    <main>
      <Helmet>
        <title>Shop | British Museum</title>
      </Helmet>
      <Top />
      <Categories />
    </main>
  );
}

export default Shop;
