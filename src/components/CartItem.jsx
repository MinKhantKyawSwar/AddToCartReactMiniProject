import React from 'react'
import "./css files/Card.css"

const CartItem = ({phone}) => {
  return (
    <div>
        <div className='card cart'>
        <div>
            <p className='card-title'>{phone.name}</p>
            <p className='card-description'>{phone.description}</p>
        </div>
        <div className='card-right-side'>
            <p className='card-price'>$ {phone.price}</p>
            <input type="number" className='cart-input' min={1} max={5}/>
        </div>     
    </div>
    </div>
  )
}

export default CartItem