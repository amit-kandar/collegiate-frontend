import React from 'react'
import './CSS/Submit.css'
import { useNavigate } from "react-router-dom";

function Submit() {
  let navigate = useNavigate();
  const handleclick = (e)=>{
    navigate('/');
  }

  return (
    <>
      <div className='submit-container'>
        <div className='submit-box'>
            <span className='right-symbol'>
              <div className='line-1'></div>
              <div className='line-2'></div>
            </span>
          <div className='submit-title'>
            <h3>Thank You!</h3>
            <p>Your feedback has been successfully submitted.</p>
          </div>

          <button className='ok-button' onClick={handleclick}>OK</button>
        </div>
      </div>
    </>
  )
}

export default Submit