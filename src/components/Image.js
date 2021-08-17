import React from 'react'

export default function Image(props) {

  const { image, title } = props

  return (
    <div>
      <div className="imgContainer">
        <h1>{title}</h1>
        <img src={image} />
      </div>
    </div>
  )

}