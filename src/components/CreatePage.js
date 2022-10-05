import React from 'react'
import '../components/CSS/CreatePage.css'
import { BsUpload } from "react-icons/bs"

function CreatePage() {
  return (
    <div className='full-con'>
        <div className='createPage-con'>
            <div className='form-con'>
                <div className='upload-photo'> <BsUpload className='upload-icon'/>Upload Event Photo</div>
                <label className='form-label'>
                    What
                    <input
                    className='input-con' type="text" name="name" placeholder='  Event Name' />
                </label>
                <label className='form-label'>
                    Who
                    <input className='input-con' type="text" name="name" placeholder='  Host Name'/>
                </label>
                <label className='form-label'>
                    From When
                    <input className='input-con' type="text" name="name" placeholder='  Start Time' />
                </label>
                <label className='form-label'>
                    To When
                    <input className='input-con' type="text" name="name" placeholder='  End Time'/>
                </label>
                <label className='form-label'>
                    Where
                    <input className='input-con' type="text" name="name" placeholder='  Location'/>
                </label>
                <input className='submit--button' type="submit" value="Next" />
            </div>
        </div>
    </div>
  )
}

export default CreatePage



// Event name, Host name, Start and End time/date, 
// Location and Event photo.