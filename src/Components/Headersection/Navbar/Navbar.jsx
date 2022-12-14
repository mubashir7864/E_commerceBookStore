import React from "react"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faUser} from "@fortawesome/free-regular-svg-icons"
import { faCartShopping , faHeart ,faUser , faSearch} from "@fortawesome/free-solid-svg-icons"



export default function Navbar(){
    

    return(
        <nav className="nav-container">
            <h4 className="logo">WisdomBooks</h4>
            
            <div>
                <input type="text" placeholder="search for Books" className="search-area" />
                <button className="search-btn"><FontAwesomeIcon icon={faSearch}/></button>
            </div>
            <div className="user-tray">
            <FontAwesomeIcon icon={faHeart}  className="icons"/>    
            <FontAwesomeIcon icon={faUser} className="icons"/>
            <FontAwesomeIcon icon={faCartShopping} className="icons"/>

            </div>
                
        
            
            

        </nav>
    )
}