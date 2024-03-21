import React from 'react'
import "./css files/Card.css"

const Card = ({phone}) => {
  return (
    <div className='card'>
        <div>
            <p className='card-title'>{phone.name}</p>
            <p className='card-description'>{phone.description}</p>
            <p className='card-price'>$ {phone.price}</p>
        </div>
        <div className='card-right-side'>
            <input type="number" className='card-input' min={1} max={5} value={1}/>
            <button className='card-button'>+ Add</button>
        </div>        
    </div>
  )
}

export default Card