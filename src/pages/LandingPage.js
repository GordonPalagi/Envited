import React from 'react'
import LandingCard from '../components/LandingCard.js'
import '../components/CSS/LandingCard.css'
import {GiPartyPopper} from "react-icons/gi"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <div>
        <LandingCard/>
        <div>
        <div className='landing--text--con'>
            <p className='landing-text'>Imagine If</p>
            <p className='snapChat--p'>SnapChat</p>
            <p className='landing-text'>Had events.</p>
            <p className='under--p'>Easily host and share events with your friends across any social media platform</p>
              <div className='button--container'>
                  <div onClick={() => navigate('/create')} className='createEvent--button button--text'> <GiPartyPopper className='party-popper'/> Create my event</div>
              </div>
        </div>
        </div>
    </div>
  )
}


      


export default LandingPage