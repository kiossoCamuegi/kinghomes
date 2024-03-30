import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductsSearch from './Components/ProductsSearch'

function Houses() {
  document.title = "Properties";

  return (
    <div>
       <Navbar active={3}  fixed /> 
          <ProductsSearch/>
        <Footer />
    </div>
  )
}

export default Houses