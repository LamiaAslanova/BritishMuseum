import React, { useContext, useEffect, useState } from 'react'
import '../ExhibitionsInfos/Infos.css'
import '../AdminExDetail/AdminExDetail.css'
import { useParams } from 'react-router'
import axios from 'axios'
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'

const AdminShDetail = () => {
    const { setShop, setEditData, editData } = useContext(MainContext)
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        setEditData(null)
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8080/shop/${id}`)
            .then(res => {
                setItem(res.data)
            })
    }, [editData])

    const handleEdit = (id, updatedValues) => {
        axios.put(`http://localhost:8080/shop/${id}`, updatedValues)
            .then(res => {
                setShop(res.data)
                setEditData(null)
            })
    }

    return (
        <div className="infos ad__ex__det">
            <div className="back__to">
                <Link to='/admin/shop-infos'>Back to all shop products</Link>
            </div>
            <table class="table table-custom">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <td>{item._id}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Title</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='title' value={editData?.title || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            title: e.target.value
                                        })
                                    }} />
                                ) : (item.title)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Images</th>
                        <td>
                            {
                                item.images?.map((image, index) => {
                                    return (
                                        <img key={index} src={image} />
                                    )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Category</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='category' value={editData?.category || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            category: e.target.value
                                        })
                                    }} />
                                ) : (item.category)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Dimensions</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='dimensions' value={editData?.dimensions || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            dimensions: e.target.value
                                        })
                                    }} />
                                ) : (item.dimensions)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Weight</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='weight' value={editData?.weight || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            weight: e.target.value
                                        })
                                    }} />
                                ) : (item.weight)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Price</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='price' value={editData?.price || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            price: e.target.value
                                        })
                                    }} />
                                ) : (`${item.price} £`)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">About</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <textarea type="text" name='about' value={editData?.about || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            about: e.target.value
                                        })
                                    }} />
                                ) : (item.about)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Edit</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <button className='btn btn-success' onClick={() => {
                                        handleEdit(item._id,
                                            {
                                                title: editData.title,
                                                category: editData.category,
                                                dimensions: editData.dimensions,
                                                weight: editData.weight,
                                                price: editData.price,
                                                about: editData.about
                                            }
                                        )
                                    }}>Save</button>
                                ) : (
                                    <button className='btn btn-warning' onClick={() => {
                                        setEditData({ ...item })
                                    }}>Edit</button>
                                )
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AdminShDetail