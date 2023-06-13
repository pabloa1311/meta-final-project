import React from 'react'
import "../styles/Main.css"
import restaurant from "../icons_assets/restaurant.jpg"

function Main() {
  return (
    <div className='main'>
      <article className='main__article'>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id elit ut sem rhoncus blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
      </article>

      <img className='main__img' src={restaurant} alt='Little Lemon restaurant'/>
    </div>
  )
}

export default Main