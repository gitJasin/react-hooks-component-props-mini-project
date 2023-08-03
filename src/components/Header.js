import React from 'react'

function Header({name}) {
  return (
    <div>
      <header>
        <h1>{name}</h1>
      </header>
    </div>
  )
}

export default Header

// [X] - Make a Header component as a child of App. It should return:

// [X] - a <header> element with the following elements inside:
// [X] - an <h1> with the name of the blog, passed as a prop called name