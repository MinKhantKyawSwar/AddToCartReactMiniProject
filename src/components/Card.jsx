import React, { useContext, useState} from 'react'
import "./css files/Card.css"
import { itemContext } from '../store/itemContext'

const Card = ({ phone }) => {
  const {id, name, description, price} = phone;
  const { addItem } = useContext(itemContext);

  const [currentAmount, setCurrentAmount] = useState(1)
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    if (currentAmountNumber < 1 || currentAmountNumber > 5 ) {
      alert("Please enter a valid amount of items.")
      return;
    }
    addItem({
      id,
      name,
      price,
      amount : currentAmountNumber
    })
  }

  return (
    <div className='card'>
        <div>
            <p className='card-title'>{name}</p>
            <p className='card-description'>{description}</p>
            <p className='card-price'>$ {price}</p>
        </div>
        <div className='card-right-side'> 
            <input type="number" className='card-input' min={1} max={5} value={currentAmount} onChange={(e)=> {setCurrentAmount(e.target.value)}}/>
            <button className='card-button' onClick={addToCartHandler}>+ Add</button>
        </div>        
    </div>
  )
}

export default Card