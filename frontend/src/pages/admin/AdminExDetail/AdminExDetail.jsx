import React, { useContext, useEffect, useState } from 'react'
import '../ExhibitionsInfos/Infos.css'
import './AdminExDetail.css'
import { useParams } from 'react-router'
import axios from 'axios'
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'

const AdminExDetail = () => {
    const { setExhibitions, setEditData, editData } = useContext(MainContext)
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        setEditData(null)
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8080/exhibitions/${id}`)
            .then(res => {
                setItem(res.data)
            })
    }, [editData])

    const handleEdit = (id, updatedValues) => {
        axios.put(`http://localhost:8080/exhibitions/${id}`, updatedValues)
            .then(res => {
                setExhibitions(res.data)
                setEditData(null)
            })
    }

    return (
        <div className="infos ad__ex__det">
            <div className="back__to">
                <Link to='/admin/exhibitions-infos'>Back to all exhibitions</Link>
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
                        <th scope="row">Supported by</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='suppBy' value={editData?.suppBy || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            suppBy: e.target.value
                                        })
                                    }} />
                                ) : (item.suppBy)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Additional supported by</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='additionalSuppBy' value={editData?.additionalSuppBy || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            additionalSuppBy: e.target.value
                                        })
                                    }} />
                                ) : (item.additionalSuppBy)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Room</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='room' value={editData?.room || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            room: e.target.value
                                        })
                                    }} />
                                ) : (item.room)
                            }
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Room name</th>
                        <td>
                            {
                                editData?._id === item._id ? (
                                    <input type="text" name='roomName' value={editData?.roomName || ''} onChange={(e) => {
                                        setEditData({
                                            ...editData,
                                            roomName: e.target.value
                                        })
                                    }} />
                                ) : (item.roomName)
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
                                                date: editData.date,
                                                time: editData.time,
                                                suppBy: editData.suppBy,
                                                additionalSuppBy: editData.additionalSuppBy,
                                                room: editData.room,
                                                roomName: editData.roomName,
                                                price: editData.price,
                                                desc: editData.desc,
                                                additionalDesc: editData.additionalDesc
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

export default AdminExDetail