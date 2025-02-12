import React, { useEffect, useState } from 'react'
import ExHero from '../../../components/site/ExDetailComponents/ExHero/ExHero'
import ExBody from '../../../components/site/ExDetailComponents/ExBody/ExBody'
import axios from 'axios'
import { useParams } from 'react-router'

const ExhibitionDetail = () => {

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
      <ExHero item={item} />
      <ExBody item={item} />
    </>
  )
}

export default ExhibitionDetail