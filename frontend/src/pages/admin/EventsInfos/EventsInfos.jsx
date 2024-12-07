import React, { useContext } from 'react'
import './EventsInfos.css'
import MainContext from '../../../context/context'
import { event } from 'jquery'
import axios from 'axios'

const EventsInfos = () => {

  const { events, setEvents } = useContext(MainContext)

  return (
    <div className="ev__infos">
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
            events.map(event => {
              return (
                <tr>
                  <th scope="row">{event._id}</th>
                  <td><img width="100px" src={event.image} alt="" /></td>
                  <td>{event.title}</td>
                  <td>{event.category}</td>
                  <td>£{event.price}</td>
                  <td><button className='btn btn-danger' onClick={() =>{
                    axios.delete(`http://localhost:8080/events/${event._id}`)
                    .then(res => {
                      setEvents([...res.data])
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

export default EventsInfos