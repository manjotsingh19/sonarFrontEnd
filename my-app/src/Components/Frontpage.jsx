import React from 'react'
import Hero from './Hero'
import Analytics from './Analytics'
import Footer from './Footer'
import Cards from './Cards'
import Navbar from './Navbar'
import Header_ from './Header_'

function Frontpage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Analytics />
      <Cards />
      <Footer />
    </div>
  )
}

export default Frontpage