import React, { useContext } from 'react'
import Hero from '../../../components/site/HomeComponents/Hero/Hero'
import Discover from '../../../components/site/HomeComponents/Discover/Discover'
import Visit from '../../../components/site/HomeComponents/Visit/Visit'
import SignUp from '../../../components/site/HomeComponents/SignUp/SignUp'
import Explore from '../../../components/site/HomeComponents/Explore/Explore'
import Welcome from '../../../components/site/HomeComponents/Welcome/Welcome'
import MainContext from '../../../context/context'
import Empty from '../../../components/site/HomeComponents/EmptySection/Empty'
import { Helmet } from "react-helmet";


const Home = () => {

  const { exhibitions, collections, shop } = useContext(MainContext)

  return (
    <main>
      <Helmet>
        <title>British Museum</title>
      </Helmet>
      <Hero />
      <Discover exhibitions={exhibitions} />
      <Visit />
      <SignUp />
      <Explore collections={collections} />
      <Empty />
      <Welcome shop={shop} />
    </main>
  )
}

export default Home