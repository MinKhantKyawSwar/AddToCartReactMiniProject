import React from 'react'
import './css files/Backdrop.css'
import CartItem from './CartItem'

const phones = [{
  id : 1,
  price: 400,
  name : "I Phone 15",
  description : "The effortable mobile device",
  quantity : 2,
},
{
  id : 2,
  price: 500,
  name : "I Phone15 Pro",
  description : "Medium is premium",
  quantity : 1,
},
{
  id : 3,
  price: 600,
  name : "I Phone 15 Pro Max",
  description : "The Best IOS mobile device so far",
  quantity : 2,
}
]

const Cart = () => {
  return (
    <section className='cart-box'>
      <h2>Your Cart</h2>
      {
        phones.map(phone => (
          <CartItem key={phone.id} phone = {phone}/>
        ))
      }
      <hr />
      <div className='total'>
        <h3>Total Price</h3>
        <p>$ 3000.00</p>
      </div>
      <div className='btns'>
        <button className='close-btn'>Close</button>
        <button className='order-btn'>Order</button>
      </div>
    </section>
  )
}

export default Cart