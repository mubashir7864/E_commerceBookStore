import React  from "react";
import Home from "./pages/home"
import { Route, Routes } from "react-router-dom";
import Favro from "./pages/favro";
import Bookview from "./pages/bookview";
import AddtoCart from "./pages/AddtoCart";
import SignIn from "./pages/signIn";
import Loginpage from "./pages/Loginpage";
import { searchContext } from "./Components/constjs/const";
import { useState } from "react";
export default function App(){
  const [book , setbook] = useState([])
  const [search , setSearch] = useState()
  const [menuuserwish , setmenuuserwish] = useState()
  const [wishlist , setwishlist]=useState([])
  const [ cartitems , setcart] =useState([])
  const [total , settotal] = useState(0)
  const [count , setCount] = useState(0)
  
  
  const addtocart = (book)=>{
    const existingcart = [...cartitems]
    const newcart = existingcart.concat(book)
    setcart(newcart)
  }
  const removefromcart = (id)=>{
    const existingcart = [...cartitems]
    const newcart = existingcart.filter((book) => book.id !== id)
    setcart(newcart)
  }

  const addtofav = (book)=>{
    const existingfav = [...wishlist]
    const newfav = existingfav.concat(book)
    setwishlist(newfav)
  }

  const removefav = (id)=>{
    const existingfav = [...wishlist]
    const newfav = existingfav.filter((book) => book.id !== id)
    setwishlist(newfav)
  }
  const incre = (id)=>{
   cartitems?.map((ele)=>{
    if(id == ele.id){
      return setCount((precount)=> precount + 1)
    }
   })
  }
  
  return(
    <React.Fragment>
      <searchContext.Provider value={{search , setSearch , menuuserwish , setmenuuserwish , wishlist , setwishlist 
      , addtofav , removefav , addtocart , removefromcart , cartitems ,setcart , total , settotal , book , setbook }}>
             <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/BookCategories"  element={<Bookview />} />
                  <Route path="/favroites" element={<Favro />} />
                  <Route path="/MyCart" element={<AddtoCart click={incre} view={count} />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/Login" element={<Loginpage />} />
            </Routes> 
    </searchContext.Provider>
  
    </React.Fragment>
  )
}