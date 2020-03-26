import React from 'react'

const Band = (props) => {
  return (
    <section>
      <h1>{props.name}</h1>
      <img src={props.image} alt="" />
      <h2>{props.album}</h2>
      <p class="description">{props.albumDescription}</p>
    </section>
  )
}

export default Band
