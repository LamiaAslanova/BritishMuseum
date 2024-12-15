import React, { useContext } from 'react'
import '../ExhibitionsInfos/Infos.css'
import MainContext from '../../../context/context'
import axios from 'axios'

const ShopInfos = () => {

  const { shop, setShop } = useContext(MainContext)

  return (
    <div className="infos">
      <table class="table table-custom">
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
            shop.map((shop__item, index) => {
              return (
                <tr key={index}>
                  <td>{shop__item._id}</td>
                  <td>
                    {
                      shop__item.images.map((image, index) => {
                        return (
                          <img key={index} src={image} width='100px' />
                        )
                      })
                    }
                  </td>
                  <td>{shop__item.title}</td>
                  <td>{shop__item.category}</td>
                  <td>£{shop__item.price}</td>
                  <td><button className='btn btn-danger' onClick={() => {
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