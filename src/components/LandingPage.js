import React from 'react'
import LandingCard from './LandingCard'
import {Link} from "react-router-dom"
import {GiPartyPopper} from "react-icons/gi"

function LandingPage() {

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
                <div className='createEvent--button button--text'> <GiPartyPopper className='party-popper'/> Create my event</div>
            </div>
        </div>
        </div>
    </div>
  )
}

            // <Link>
            // <div className='button--container'>
            //       <a><div className='createEvent--button button--text'> <GiPartyPopper className='party-popper'/> Create my event</div></a>
            //   </div>
            // <Link/>

      


export default LandingPage