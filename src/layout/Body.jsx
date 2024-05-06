import React from 'react'
import Card from '../components/Card'

const phones = [
    {
        id : 1,
        price: 400,
        name : "I Phone 15",
        description : "The effortable mobile device"
    },
    {
        id : 2,
        price: 500,
        name : "I Phone15 Pro",
        description : "Medium is premium"
    },
    {
        id : 3,
        price: 600,
        name : "I Phone 15 Pro Max",
        description : "The Best IOS mobile device so far"
    },
    {
        id : 4,
        price: 200,
        name : "Air Pods Pro",
        description : "Experience the best active noise cancelation"
    },
    {
        id : 5,
        price: 450,
        name : "Apple Watch",
        description : "The best smartwatch you can own"
    },
];

const Body = () => {
  return (
    <section className='body'>
        {
            phones.map((phone, index) => (
                <Card key={index} phone={phone}/>
            ))
        }
    </section>
  )
}

export default Body