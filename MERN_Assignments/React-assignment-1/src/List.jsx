import React from 'react'

const List = (props) => {
    const listItems = props.items.map((item) =>
        <li key={item}>{item}</li>
    )
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default List