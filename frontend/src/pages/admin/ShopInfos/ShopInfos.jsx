import React, { useContext } from 'react'
import './ShopInfos.css'
import MainContext from '../../../context/context'
import axios from 'axios'

const ShopInfos = () => {

  const { shop, setShop } = useContext(MainContext)

  return (
    <div className="sh__infos">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            shop.map(shop__item => {
              return (
                <tr>
                  <th scope="row">{shop__item._id}</th>
                  <td><img width="100px" src={shop__item.image} alt="" /></td>
                  <td>{shop__item.title}</td>
                  <td>{shop__item.category}</td>
                  <td>£{shop__item.price}</td>
                  <td><button className='btn btn-danger' onClick={() =>{
                    axios.delete(`http://localhost:8080/shop/${shop__item._id}`)
                    .then(res => {
                      setShop([...res.data])
                    })
                  }}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShopInfos