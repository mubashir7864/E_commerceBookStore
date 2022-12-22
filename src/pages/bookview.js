import React , {useContext}from 'react'
import Navbar from '../Components/Headersection/Navbar/Navbar'
import Card from "../Components/Headersection/card/card"
import Footer from "../Components/Headersection/Footer/Footer"
import { searchContext } from '../Components/constjs/const'

function Bookview() {
  const{search} = useContext(searchContext)
  return (
    <div>
      <Navbar />
      {search && <Card topic={search} topicTitle={`search Results`} className="search"/>}
      <Card topic="New Released" topicTitle="Newly  Released"/>
      <Card topic="fiction" topicTitle="Don't go DEEEEP its Fiction Time"/>
      <Card topic="Children" topicTitle="Childrens Universe"/>
      <Card topic="Science" topicTitle="World of Science"/>

      <Footer />
    </div>
  )
}

export default Bookview