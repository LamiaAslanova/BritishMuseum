import React, { useContext, useEffect } from 'react'
import '../ExhibitionsInfos/Infos.css'
import MainContext from '../../../context/context'
import axios from 'axios'

const CollectionInfos = () => {

  const { collections, setCollections, editData, setEditData } = useContext(MainContext)

  useEffect(() => {
    setEditData(null)
  }, [])

  const handleEdit = (id, updatedValues) => {
    axios.put(`http://localhost:8080/collections/${id}`, updatedValues)
      .then(res => {
        setCollections(res.data)
        setEditData(null)
      })
  }

  return (
    <div className="infos collection__infos">
      <table class="table table-custom">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Edit</th>
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
                  <td>
                    {
                      editData?._id === collection._id ? (
                        <input type="text" name='title' value={editData.title} onChange={(e) => {
                          setEditData({
                            ...editData,
                            title: e.target.value
                          })
                        }} />
                      ) : (collection.title)
                    }
                  </td>
                  <td>
                    {
                      editData?._id === collection._id ? (
                        <input type="text" name='category' value={editData.category} onChange={(e) => {
                          setEditData({
                            ...editData,
                            category: e.target.value
                          })
                        }} />
                      ) : (collection.category)
                    }
                  </td>
                  <td className='special__td'>
                    {
                      editData?._id === collection._id ? (
                        <button className='btn btn-success' onClick={() => {
                          handleEdit(collection._id,
                            {
                              title: editData.title,
                              category: editData.category
                            }
                          )
                        }}>Save</button>
                      ) : (
                        <button className='btn btn-warning' onClick={() => {
                          setEditData({ ...collection })
                        }}>Edit</button>
                      )
                    }
                  </td>
                  <td className='special__td'><button className='btn btn-danger' onClick={() => {
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