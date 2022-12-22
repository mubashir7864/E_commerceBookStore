import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import React from "react"
import "./Hero.css"

export default function Hero(){
    return(
            <section className="hero">
                <h1 className="hero-title">WHAT BOOK ARE YOU LOOKING FOR ?</h1>
                <p className="hero-subT">Not Sure What To Read Next? <br /> Explore Our Wisdom book worlds Collection,s</p>
                <button className="hero-btn"><Link className="BookCat" to="/BookCategories">Explore Now <FontAwesomeIcon className="iconbtn" icon={faArrowRight} /></Link></button>
            </section>

    )
}

