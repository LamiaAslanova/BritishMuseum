import React, { useEffect, useState } from 'react'
import EvHero from '../../../components/site/EvDetailComponents/EvHero/EvHero'
import EvBody from '../../../components/site/EvDetailComponents/EvBody/EvBody'
import { useParams } from 'react-router'
import axios from 'axios'

const EventDetail = () => {

  const [item, setItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/events/${id}`)
      .then(res => {
        setItem(res.data)
      })
  }, [])

  return (
    <>
      <EvHero item={item} />
      <EvBody item={item} />
    </>
  )
}

export default EventDetail