import React from 'react'
import "../styles/Specials.css"
import SpecialsOptions from './SpecialsOptions'

function Specials() {
  return (
    <div className='specials'>
        <div className='specials__header'>
            <h2>Specials</h2>
            <button>Online Menu</button>
        </div>
        <div className='specials__options'>
            <SpecialsOptions
                img="../icons_assets/greek salad.jpg"
                title="Greek Salad"
                price="12.99"
                desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
            />
            <SpecialsOptions
                img="../icons_assets/greek salad.jpg"
                title="Greek Salad"
                price="12.99"
                desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
            />
        </div>
    </div>
  )
}

export default Specials