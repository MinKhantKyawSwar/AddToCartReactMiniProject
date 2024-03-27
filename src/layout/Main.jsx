import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Backdrop from '../components/Backdrop'

const Main = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }
  return (
   <>
        <Header showCartHandler={showCartHandler}/>
        <Body/>
        <Backdrop showCart={showCart} hideCartHandler= {hideCartHandler}/> 
   </>

  )
}

export default Main