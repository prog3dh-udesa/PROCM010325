import React from 'react'

export default function Detalle(props) {
  console.log('props detl', props)
  const idFicha = props.match.params.id
  return (
    <div>Detalle de la ficha {idFicha}</div>
  )
}
