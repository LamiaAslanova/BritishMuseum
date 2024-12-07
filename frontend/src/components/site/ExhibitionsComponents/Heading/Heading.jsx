import React, { useContext, useEffect, useRef, useState } from 'react'
import './Heading.css'
import MainContext from '../../../../context/context'
import HeadingMain from './HeadingMain'

const Heading = () => {

  const { dropdownHeight } = useContext(MainContext)

  return (
    <div className="ex__heading">
      <div className="custom-container ex__heading__cont">
        <div className="row ex__heading__row" style={{ marginBottom: `${dropdownHeight}px` }}>
          <div className="col-12 ex__heading__col">
            <h1>Exhibitions and events</h1>
            <HeadingMain />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading