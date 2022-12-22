//import { faMessage } from "@fortawesome/free-regular-svg-icons"
//import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faYou } from "@fortawesome/free-solid-svg-icons"
//import {  f } from "@fortawesome/free-regular-svg-icons"
import React from "react"
import "./Footer.css"
//import { faBookSkull } from "@fortawesome/free-solid-svg-icons"


export default function Footer(){
    return(
        <>
        <hr />
        <div className="footer">
                
                <div className="about-section">
                    <ul className="about">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Support</li>
                        <li>Services</li>
                    </ul>
                    <div>
                    <p className="email"><FontAwesomeIcon icon={faEnvelope} className="email-logo"/>WisdomBooks@gmail.com</p>
                </div>
                    <p className="copy">&copy; Copyright 2022 THE WISDOM BOOKS . All Rights Reserved</p>
                </div>
            
        </div>
        </>
    )
}