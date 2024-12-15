import React, { useContext } from 'react'
import '../ExhibitionsInfos/Infos.css'
import MainContext from '../../../context/context'
import axios from 'axios'

const EventsInfos = () => {

  const { events, setEvents } = useContext(MainContext)

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
            events.map((event, index) => {
              return (
                <tr key={index}>
                  <td>{event._id}</td>
                  <td><img src={event.image} /></td>
                  <td>{event.title}</td>
                  <td>{event.category}</td>
                  <td>£{event.price}</td>
                  <td><button className='btn btn-danger' onClick={() => {
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