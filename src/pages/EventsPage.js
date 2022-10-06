import React from 'react'
import '../components/CSS/EventsPage.css'
import {BsFillCalendarDateFill} from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import birthdayCake from '../images/BirthdayCake.png'
import { useNavigate } from 'react-router-dom'

function EventsPage() {

  const navigate = useNavigate();

  return (
    <div className='events--text--con'>
      <div className='Birthday--text--con'>
        <h2>Birthday Bash</h2>
        <sub className='hosted'>hosted by <span className='name'>Elysia</span></sub>
      </div>
      <div className="dateAndTime">
        <span className='icon--con'><BsFillCalendarDateFill className='calendar--icon'/></span>
        <div className='inner-con-dateTime'>
          <span className='from-date'>18 August 6:00PM</span>
          <span className='to-date'>to <span className='from-date'>19 August 1:00PM </span> UTC + 10</span>
        </div>
      </div>
      <div className='placeOfEvent'>
        <span className='icon--con'><GoLocation className='go-icon'/></span>
        <div className='inner-con-place'>
          <span className='from-date'>Street Name</span>
          <span className='to-date'>Suburb, State, Postcode</span>
        </div>
      </div>
      <div onClick={() => navigate("/")} className='HomeButton'>Home</div>
      <div className='cake-con'>
        <img className='cake-img' alt="it's cake!" src={birthdayCake}/>
      </div>
    </div>
  )
}

export default EventsPage