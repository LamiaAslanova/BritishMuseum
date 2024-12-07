import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import FreeExHero from '../../../components/site/FreeExDetailComponents/FreeExHero/FreeExHero'
import FreeExBody from '../../../components/site/FreeExDetailComponents/FreeExBody/FreeExBody'
import axios from 'axios'

const FreeExhibitionDetail = () => {

  const [item, setItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/exhibitions/${id}`)
      .then(res => {
        setItem(res.data)
      })
  }, [])

  return (
    <>
      <FreeExHero item={item} />
      <FreeExBody item={item} />
    </>
  )
}

export default FreeExhibitionDetail