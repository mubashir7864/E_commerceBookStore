import React , {useContext}from 'react'
import Navbar from "../Components/Headersection/Navbar/Navbar"
import Hero from '../Components/Headersection/Hero/Hero'
import Card from '../Components/Headersection/card/card'
import Menu from '../Components/Headersection/Menu/Menu'
import Footer from '../Components/Headersection/Footer/Footer'
import { searchContext } from '../Components/constjs/const'


function Home() {
  const{ search , menuuserwish} = useContext(searchContext)
  return (
    <div>
        <Navbar />
        {search ? <Card topic={search} topicTitle="search Results"/> : <Hero />}
        <Card topic="topTrending"  topicTitle="Top Trending Books"/>
        <Menu />
        {menuuserwish && <Card topic={menuuserwish} topicTitle={menuuserwish} />}
        <Card topic="rohitshetty"  topicTitle="Best Sellers"/>
        <Footer />

    </div>
  )
}

export default Home