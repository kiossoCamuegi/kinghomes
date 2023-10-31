import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import MostVisited from './Components/MostVisited'
import ExploreProducts from './Components/ExploreProducts'
import TestimonialsSection from './Components/TestimonialsSection'
import Footer from './Components/Footer'
import ImageLazyLoading from './Components/ImageLazyLoading'

function Home() {
  document.title = "KingHomes";
  return (
    <div>
        <Navbar active={1} />
        <Header />
        <MostVisited /> 
        <ExploreProducts />
        <TestimonialsSection />
        <Footer />
    </div>
  )
}

export default Home