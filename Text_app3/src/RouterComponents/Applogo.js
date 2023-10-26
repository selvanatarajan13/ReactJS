import React from 'react'

const Applogo = (props) => {
  return (
    <h1 className='App-logo'>{props.title.toUpperCase()}</h1>
  )
}

export default Applogo