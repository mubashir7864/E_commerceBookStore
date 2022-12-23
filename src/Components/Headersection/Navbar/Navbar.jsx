import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faUser} from "@fortawesome/free-regular-svg-icons"
import { faCartShopping , faHeart ,faUser , faSearch , faHome} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { searchContext } from "../../constjs/const"



export default function Navbar(){
    const { setSearch , setSearchbool } = useContext(searchContext)
    const bookSearched = ()=>{
        return setSearchbool
    }

    return(
        <nav className="nav-container">
            <Link to={"/"} className="logol"> <h4 className="logo">WisdomBooks</h4> </Link>
            
            <div>
                <input type="text" placeholder="search for Books" className="search-area" onChange={(e)=>setSearch(e.target.value)} />
                <button className="search-btn" onClick={bookSearched}><FontAwesomeIcon icon={faSearch}/></button>
            </div>
            <div className="user-tray">
                <Link to="/"><FontAwesomeIcon icon={faHome} className="icons" onClick={()=>setSearch("")} /></Link>
                <Link to="/favroites"><FontAwesomeIcon icon={faHeart}  className="icons" onClick={()=>setSearch("")}/></Link>    
                <Link to="/signIn" ><FontAwesomeIcon icon={faUser} className="icons"/></Link>
                <Link to= "/MyCart"><FontAwesomeIcon icon={faCartShopping} className="icons"/></Link>
            </div>
        </nav>
    )
}