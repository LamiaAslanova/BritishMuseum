import React, { useContext } from 'react'
import '../ExhibitionsInfos/Infos.css'
import MainContext from '../../../context/context'
import axios from 'axios'

const CollectionInfos = () => {

  const { collections, setCollections } = useContext(MainContext)

  return (
    <div className="infos">
      <table class="table table-custom">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            collections.map((collection, index) => {
              return (
                <tr key={index}>
                  <td>{collection._id}</td>
                  <td><img src={collection.image} /></td>
                  <td>{collection.title}</td>
                  <td>{collection.category}</td>
                  <td><button className='btn btn-danger' onClick={() => {
                    axios.delete(`http://localhost:8080/collections/${collection._id}`)
                      .then(res => {
                        setCollections([...res.data])
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

export default CollectionInfos