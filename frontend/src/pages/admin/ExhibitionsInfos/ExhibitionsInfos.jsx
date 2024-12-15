import React, { useContext } from 'react'
import './Infos.css'
import MainContext from '../../../context/context'
import axios from 'axios'

const ExhibitionsInfos = () => {

  const { exhibitions, setExhibitions } = useContext(MainContext)

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
            exhibitions.map((exhibition, index) => {
              return (
                <tr key={index}>
                  <td>{exhibition._id}</td>
                  <td><img src={exhibition.image} alt="" /></td>
                  <td>{exhibition.title}</td>
                  <td>{exhibition.category}</td>
                  <td>£{exhibition.price}</td>
                  <td><button className='btn btn-danger' onClick={() => {
                    axios.delete(`http://localhost:8080/exhibitions/${exhibition._id}`)
                      .then(res => {
                        setExhibitions([...res.data])
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

export default ExhibitionsInfos