import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

export default function Login() {
    function handleSumbit(e){
        e.preventDefault()
    }
  return (
    <>
    <div className='logincontainer'>
        <h4 className="logolo">WisdomBooks</h4> 
        <div className="form-containerbox">
                    <form className="formbox" onSubmit={handleSumbit} >
                        <img src="https://img.freepik.com/free-vector/open-book-isolated_1284-43075.jpg?w=360" className='imgpic' alt='book'/>
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
                        
                        
                        
                        <button 
                            className="form--login"
                        >
                         <Link to="/" className='loginbtn'>Login</Link> 
                        </button>
                    </form>
                </div>
    </div>
    </>
  )
}


