import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"

export default function Signup() {
    function handleSumbit(e){
        e.preventDefault()
    }
  return (
    <>
    <div className='signup'>
        <h4 className="logolo">WisdomBooks</h4> 
        <div className="form-container">
                    <form className="form" onSubmit={handleSumbit} >
                        <input 
                            type="email" 
                            placeholder="Email address"
                            className="form--input"
                        />
                        <input 
                            type="password" 
                            placeholder="Password"
                            className="form--input"
                        />
                        <input 
                            type="password" 
                            placeholder="Confirm password"
                            className="form--input"
                        />
                        
                        
                        <button 
                            className="form--submit"
                        >
                         <Link to="/Login" className='signbtn'> Sign up</Link> 
                        </button>
                        <p className='already'>Already have a Account ? <Link className="login" to="/Login">Login</Link></p>
                    </form>
                </div>
    </div>
    </>
  )
}

