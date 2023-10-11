import React from 'react'
import Navbar from '../Components/Headersection/Navbar/Navbar'
import Footer from '../Components/Headersection/Footer/Footer'
import Cart from "../Components/Headersection/Cart/Cart"

function AddtoCart(props) {
  return (
    <div>
      <Navbar />
      <Cart klick={props.click} vview={props.view}/>
      <Footer />
    </div>
  )
}

export default AddtoCart