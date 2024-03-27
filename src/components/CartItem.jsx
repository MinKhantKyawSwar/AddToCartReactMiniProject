import React, { useContext } from 'react'
import "./css files/Card.css"
import { itemContext } from '../store/itemContext'


const CartItem = ({phone}) => {
  const {addItem, removeItem} = useContext(itemContext);
  const addAmountHandler = () => {
    addItem({...phone, amount: 1})
  }
  const removeAmountHandler = () => {
    removeItem (phone.id)
  }
  return (
    <div>
        <div className='card cart'>
        <div>
            <p className='card-title'>{phone.name}</p>
            <p className='card-price'>$ {phone.price}</p>
        </div>
        <div className='card-right'>
            <p className='card-quantity'>x<span>{phone.amount}</span></p>
            <div className='quantity-ctr'>
              <button className='quantity-btn m-ctr' onClick={addAmountHandler}>+</button>
              <button className='quantity-btn' onClick={removeAmountHandler}>-</button>
            </div>
        </div>     
    </div>
    </div>
  )
}

export default CartItem