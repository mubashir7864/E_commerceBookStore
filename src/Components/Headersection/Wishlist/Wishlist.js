import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React , {useContext} from 'react'
import { searchContext } from '../../constjs/const'
import "./Wishlist.css"

function Wishlist() {
  const {wishlist , removefav} = useContext(searchContext)  
  return (
    <div className='wish-section'>
        <div className='wish-container'>
            <h2 className='wish-subtite'>My Wishlist {wishlist.length}</h2>
            <hr/>
            {wishlist.map((wishl)=>{
            return(
            <div className='perwishbook'>
                <img className='wishbookimg' src={wishl.volumeInfo.imageLinks ? `${wishl.volumeInfo.imageLinks.smallThumbnail}` : `image not available`} alt='favbookimg' />
                    <div className='both'>
                        <h3 className='wishbooktitle'>{wishl.volumeInfo.title}</h3>
                        <FontAwesomeIcon icon={faTrash}  className="trash" onClick={()=>removefav(wishl.id)}/>
                    </div>
                <h4 className='wishbookauthor'>{wishl.volumeInfo.authors ? wishl.volumeInfo.authors : ""}</h4>
                <h5 className='wishbookrating'>{wishl.volumeInfo.averageRating ? "(" + `${wishl.volumeInfo.averageRating}`+".0)" : "(4.5)"}</h5>
                <h5 className='wishbookrate'>{wishl.saleInfo.saleability === "FOR_SALE" ? `Rs: ${Number(wishl.saleInfo.retailPrice.amount)}`: <p className='nooavail'>Currently Unavailable</p>}</h5>
            </div>
            )})}
        </div>
    </div>
  )
}

export default Wishlist