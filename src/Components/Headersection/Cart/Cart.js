import React, { useState  , useContext} from 'react'
import { searchContext } from '../../constjs/const'
import CartCounter from './CartCounter'
import "./Cart.css"


function Cart(props) {
   const{cartitems , total , settotal , count , setCount , incre}=useContext(searchContext)
  return (
    <div className='Cart-section'>
        <div classN ame='cart-container'>
            <div className='Cart-items'>
                <h2 className='cart'>Cart Items({cartitems.length})</h2>

                </div>
            <hr/>
             { cartitems.map((item)=>{ 
                return(          
            <div className='per-cart'>
            <div className='first-part'>
                <img className='cart-img' src={item.volumeInfo.imageLinks ? `${item.volumeInfo.imageLinks.smallThumbnail}` : `image not available`}  alt='cart img'/>
                 <div className='counter'>
                    <CartCounter />
                    {/* <button className='incre' onClick={()=>setCount((pre)=>pre > 0 ? (pre - 1) : pre  )}>-</button>
                    <h4 className='count'>{props.vview}</h4>
                    <button className='decre' onClick={()=>props.klick(item.id)}>+</button> */}

                </div> 
            </div>
                
            <div className='other-part'>
                <h2 className='Cart-title'>{item.volumeInfo.title ? item.volumeInfo.title : ""}</h2>
                <p className='cartitem-rating'>{item.volumeInfo.averageRating ? "(" + `${item.volumeInfo.averageRating}`+".0)" : "(4.5)"}</p>
                <h4 className='peritem-amount'>{item.saleInfo.saleability === "FOR_SALE" ? `Rs: ${Number(item.saleInfo.retailPrice.amount)}`: "Out of Stock" }</h4>
            </div>

            </div>
                )
})
} 
            
            <hr />
            <div className='place'>
                <button className='place-orderbtn'>Place Order</button>
            </div>
        </div>
        <div className='billing Container'>
            {total}
        </div>
    </div>
  )
}

export default Cart