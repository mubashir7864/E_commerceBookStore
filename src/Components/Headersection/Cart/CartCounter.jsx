import React, { useState  , useContext} from 'react'
import "./Cart.css"


export default function CartCounter(){
    const [incre , setIncre] = useState(1)
    
    return(   
        <>
        <button className='incre' onClick={()=>setIncre((pre)=>pre > 0 ? (pre - 1) : pre  )}>-</button>
        <h4 className='count'>{incre}</h4>
        <button className='decre' onClick={()=>setIncre((pre)=>pre + 1)}>+</button>
        </>
    )
}