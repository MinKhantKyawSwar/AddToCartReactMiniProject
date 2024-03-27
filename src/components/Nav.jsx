import React, { useContext } from 'react'
import "./css files/Nav.css"
import { itemContext } from '../store/itemContext'

const Nav = (props) => {
  const {items} = useContext(itemContext)
  const totalCart = items.reduce((currentVal,item)=>{
    return currentVal + item.amount
  },0);

  return (
    <nav>
        <h1>React Shop</h1>
        <button className='Cart-button' onClick={props.showCartHandler}>
            Cart <span>({totalCart})</span>
        </button>
    </nav>
  )
}

export default Nav