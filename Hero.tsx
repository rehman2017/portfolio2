import React from 'react'
import Navbar from './Navbar'
export default function Hero() {
  return (
    <div id="hero" className="main-h-screen bg-no-repeat bg-[url(/academy.jpeg)] bg-left lg:bg-[15%] bg-cover"
     style={{backgroundSize:"150px"}}>
      <p>hello</p>
      <Navbar/>
      
    </div>
  )
}


