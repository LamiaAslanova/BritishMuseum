import React, { useContext } from 'react'
import Special from '../../../components/site/ExhibitionsComponents/Special/Special'
import Free from '../../../components/site/ExhibitionsComponents/Free/Free'
import Highlight from '../../../components/site/ExhibitionsComponents/Highlight/Highlight'
import Guided from '../../../components/site/ExhibitionsComponents/Guided/Guided'
import Heading from '../../../components/site/ExhibitionsComponents/Heading/Heading'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'

const Exhibitions = () => {

  const { exhibitions, events } = useContext(MainContext)

  return (
    <main>
      <Helmet>
        <title>Exhibitions and events | British Museum</title>
      </Helmet>
      <Heading />
      <Special exhibitions={exhibitions} />
      <Free exhibitions={exhibitions} />
      <Highlight events={events} />
      <Guided events={events} />
    </main>
  )
}

export default Exhibitions