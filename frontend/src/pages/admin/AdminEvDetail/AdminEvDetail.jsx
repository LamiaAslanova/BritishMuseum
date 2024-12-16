import React, { useContext, useEffect, useState } from 'react'
import '../ExhibitionsInfos/Infos.css'
import '../AdminExDetail/AdminExDetail.css'
import { useParams } from 'react-router'
import axios from 'axios'
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'

const AdminEvDetail = () => {
    const { setEvents, setEditData, editData } = useContext(MainContext)
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        setEditData(null)
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8080/events/${id}`)
            .then(res => {
                setItem(res.data)
            })
    }, [editData])

    const handleEdit = (id, updatedValues) => {
        axios.put(`http://localhost:8080/events/${id}`, updatedValues)
            .then(res => {
                setEvents(res.data)
                setEditData(null)
            })
    }

    return (
        <div className="infos ad__ex__det">
            <div className="back__to">
                <Link to='/admin/events-infos'>Back to all events</Link>
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
                        <th scope="row">Image</th>
                        <td><img src={item.image} alt="" /></td>
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
                        <th scope="row">Type</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='type' value={editData?.type || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            type: e.target.value
                                        })
                                    }} />
                                ) : (item.type)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Date</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='date' value={editData?.date || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            date: e.target.value
                                        })
                                    }} />
                                ) : (item.date)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Time</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='time' value={editData?.time || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            time: e.target.value
                                        })
                                    }} />
                                ) : (item.time)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Age</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='age' value={editData?.age || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            age: e.target.value
                                        })
                                    }} />
                                ) : (item.age)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Place</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='place' value={editData?.place || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            place: e.target.value
                                        })
                                    }} />
                                ) : (item.place)
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
                        <th scope="row">Mini description</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <textarea type="text" name='miniDesc' value={editData?.miniDesc || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            miniDesc: e.target.value
                                        })
                                    }} />
                                ) : (item.miniDesc)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Description</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <textarea type="text" name='desc' value={editData?.desc || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            desc: e.target.value
                                        })
                                    }} />
                                ) : (item.desc)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Additional description</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <textarea type="text" name='additionalDesc' value={editData?.additionalDesc || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            additionalDesc: e.target.value
                                        })
                                    }} />
                                ) : (item.additionalDesc)
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
                                                type: editData.type,
                                                date: editData.date,
                                                time: editData.time,
                                                age: editData.age,
                                                miniDesc: editData.miniDesc,
                                                desc: editData.desc,
                                                additionalDesc: editData.additionalDesc,
                                                place: editData.place,
                                                price: editData.price
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

export default AdminEvDetail