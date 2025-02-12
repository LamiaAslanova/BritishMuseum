import React, { useContext } from 'react'
import './Collection.css'
import Hero from '../../../components/site/CollectionComponents/Hero/Hero'
import Description from '../../../components/site/CollectionComponents/Description/Description'
import Americas from '../../../components/site/CollectionComponents/Americas/Americas'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'

const Collection = () => {

  const { collections } = useContext(MainContext)

  const objects = collections.slice(6)

  const americas = objects.filter(item => item.category === 'Americas')
  const animals = objects.filter(item => item.category === 'Animals')
  const china = objects.filter(item => item.category === 'China')
  const death = objects.filter(item => item.category === 'Death and memory')
  const africa = objects.filter(item => item.category === 'Africa')
  const egypt = objects.filter(item => item.category === 'Egypt')

  return (
    <main>
      <Helmet>
        <title>Collection | British Museum</title>
      </Helmet>
      <Hero />
      <Description />
      <Americas items={americas} />
      <Americas items={animals} />
      <Americas items={china} />
      <Americas items={death} />
      <Americas items={africa} />
      <Americas items={egypt} />
    </main>
  )
}

export default Collection