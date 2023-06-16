import React from 'react'
import "../styles/Testimonial.css"
import TestimonialComment from './TestimonialComment'

function Testimonial() {
  return (
    <div className='testimonial'>
        <h2>Testimonial</h2>
        <div className='testimonial__comments'>
            <TestimonialComment 
                rating={4.5}
                name="Valeria Vallejo"
                comment="Best restaurant in town"
            />
            <TestimonialComment 
                rating={4.5}
                name="Valeria Vallejo"
                comment="Best restaurant in town"
            />
            <TestimonialComment 
                rating={4.5}
                name="Valeria Vallejo"
                comment="Best restaurant in town"
            />
            <TestimonialComment 
                rating={4.5}
                name="Valeria Vallejo"
                comment="Best restaurant in town"
            />
        </div>
    </div>
  )
}

export default Testimonial