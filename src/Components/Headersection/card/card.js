import { faHeart , faArrowAltCircleLeft , faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import { faHeart as heart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useEffect, useRef, useState } from "react"
//import axios from "axios"
import axios from "../../../axios"
//import Bookview from "../../../pages/bookview"
import { Api_key, Api_key2, searchContext } from "../../constjs/const"
import Wishlist from "../Wishlist/Wishlist"
import "./Card.css"




export default function Card(props)
{   const {setwishlist , wishlist , addtofav , removefav} = useContext(searchContext)
    const [book , setbook] = useState([])
    const ref=useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
    const favroitecheck = (id) =>{
        const bool = wishlist.some((book)=> book.id == id)
        return bool
    }  

    
    useEffect(()=>{
        async function maalo(){
       const res = await axios.get(`volumes?q=${props.topic}&key=${Api_key || Api_key2}`) 
       const data = res.data.items
       console.log("rendered")
        setbook(data)
        }
        maalo()
    },[props.topic])

    console.log(wishlist)      
    return(
        <div className="section-card">
            <h2 className="book-cat">{props.topicTitle}</h2>
            <div className="card-section" ref={ref}>
                <div className="card">
                    <button className="left-scroll" onClick={() => scroll(-40)} style={{scroll}}><FontAwesomeIcon className="scroll-logo" icon={faArrowAltCircleLeft} /></button>
                    <button className="right-scroll" onClick={() => scroll(40)}><FontAwesomeIcon className="scroll-logo" icon={faArrowAltCircleRight} /></button>

                    {book.map((ele)=>{
                        
                       return( 
                        
                        
                    <div className="per-card" key={ele.id}>
                        { favroitecheck(ele.id) ? <FontAwesomeIcon icon={heart}  className="favroites yesfav" onClick={()=>removefav(ele.id)}/> : <FontAwesomeIcon icon={faHeart} className="favroites" onClick={()=>addtofav(ele)}/> } 
                        <img className="card-img" src={ele.volumeInfo.imageLinks ? `${ele.volumeInfo.imageLinks.smallThumbnail}` : `image not available`} alt="cardimage" />
                        <h3 className="card-title">{ele.volumeInfo.title ? ele.volumeInfo.title : ""}</h3>
                        <p className="card-sub"><span className="card-rating">{ele.volumeInfo.averageRating ? "(" + `${ele.volumeInfo.averageRating}`+".0)" : "(4.5)"}</span></p>
                        <h3 className="card-amount">{ele.saleInfo.saleability === "FOR_SALE" ? `Rs: ${Number(ele.saleInfo.retailPrice.amount)}`: "Out of Stock" }</h3>
                    </div>
                ) })    
                }
                    
                    
                                       

                    
                </div>
                
            </div>
            <hr />
        </div>
    )
}