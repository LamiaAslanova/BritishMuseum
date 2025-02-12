import React from 'react'
import './Visit.css'
import VisitHero from '../../../components/site/VisitComponents/Hero/Hero'
import VisitBody from '../../../components/site/VisitComponents/Body/Body'
import Map from '../../../components/site/VisitComponents/Map/Map'
import SignUp from '../../../components/site/HomeComponents/SignUp/SignUp'
import { Helmet } from 'react-helmet'

const Visit = () => {
    return (
        <main>
            <Helmet>
                <title>Visit | British Museum</title>
            </Helmet>
            <VisitHero />
            <VisitBody />
            <SignUp />
            <Map />
        </main>
    )
}

export default Visit