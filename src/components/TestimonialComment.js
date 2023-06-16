import React from 'react'
import "../styles/TestimonialComment.css"
import { Avatar } from '@mui/material'

function TestimonialComment({rating, name, comment}) {
  return (
    <div className='testiComment'>
        <h4>{rating}/5</h4>
        <div className='testiComment__name'>
            <Avatar />
            <p>{name}</p>
        </div>
        <p>{comment}</p>
    </div>
  )
}

export default TestimonialComment