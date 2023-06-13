import React from 'react'
import "../styles/SpecialsOption.css"


function SpecialsOptions({img, title, desc, price}) {
  return (
    <div className='options'>
        <img src={img} alt={title} />
        <div className='options__title'>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
        <p>{desc}</p>
        <div className='options__order'>
            <p>Order a Delivery</p>
            
        </div>
    </div>
  )
}

export default SpecialsOptions