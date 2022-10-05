import React from 'react'
import LandingImage from '../images/LandingPageImage.svg'
import '../components/CSS/LandingCard.css'

function LandingCard() {

  return (
        <div className='landing--image--con'>
            <img className='landing--image' src={LandingImage} alt="An (e)vent i(nvite)" />
        </div>
  )
}

export default LandingCard