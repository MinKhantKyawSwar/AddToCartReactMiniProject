import React from 'react'
import "./css files/Nav.css"

const Nav = () => {
  return (
    <nav>
        <h1>React Shop</h1>
        <button className='Cart-button'>
            Cart <span>1</span>
        </button>
    </nav>
  )
}

export default Nav