import React from 'react'
import Buscador from '../../components/Buscador/Buscador'
function AboutUs(props) {
  console.log('props aboutus', props)
  return (
    <div>
        <h1>
            AboutUs
        </h1>
        <Buscador history={props.history} />
        </div>
  )
}

export default AboutUs
