import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup__div">
        <div className='signup__div__left'>
          <h2>Sign up to our newsletters</h2>
        </div>
        <div className='signup__div__right'>
          <p>Stay connected to the British Museum for the latest news, stories, exhibitions, events and visitor information.</p>
          <Link to='sign-up'>
            <span>Sign up</span>
            <i class="fa-solid fa-circle-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp