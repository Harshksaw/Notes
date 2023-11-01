import React from 'react'

const Person = (props) => {
  return (
    <>
      <p>{props.name} is <span>{props.age}</span> years old</p>
    </>
  )
}

export default Person
