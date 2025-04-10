import React from 'react'

function Categoria(props) {
  return (
    <article className="card">
        <p>{props.data.name}</p>
    </article>
  )
}

export default Categoria
