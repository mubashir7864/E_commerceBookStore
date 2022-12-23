import React , {useContext} from "react";
import Navbar from "../Components/Headersection/Navbar/Navbar";
import Footer from "../Components/Headersection/Footer/Footer"
import { searchContext } from "../Components/constjs/const";
import Card from "../Components/Headersection/card/card";
import Wishlist from "../Components/Headersection/Wishlist/Wishlist";



export default function Favro(){
    const {search} = useContext(searchContext)
    return(
        <>
        <div>
            <Navbar />
            {search && <Card topic={search} topicTitle="search Results"/>}
            <Wishlist />
            <Footer />
            

        </div>
        </>
    )
}