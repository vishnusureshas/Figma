import React from 'react'
import './Details.css'
import db from '../../../assets/pn.jpg'
 

function Details() {
    const details =[
      {
        number:'34,56,000',
        content:'Happy Customers who Trusted Us'
      },
      {
        number:'245,678+',
        content:"Zero Waste Product Said" 
      },
      {
        number:'45,678kg',
        content:"Plastic Polution is prevented In Last 5 days" 
      },

    ]
  return (
    <div className='form-container'>
        <div className='form-img'>           
              <img src={db} alt='alternative'/>
              <div className='content-wrapper'>
              {
                details.map((item,index) => (
                    <div className='form-details' key={index}>
                    <h2 className='num'>{item.number}</h2>
                    <p className='contents'>{item.content}</p>
                 </div>
                ))
              } 
              </div>       
        </div>
    </div>
  )
}

export default Details