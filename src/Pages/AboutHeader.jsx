import React from 'react'
import ImageLazyLoading from './Components/ImageLazyLoading'

function AboutHeader() {
  return (
    <div className='about-header'>
       <div className="cover-image">
          <ImageLazyLoading source="https://nativainteriors.com/wp-content/uploads/2021/07/5-1-1080x584.png"  height={350} />
       </div>
       <div className="over-box">
       <div className="wrapper">
            <div className="block-text">
               <div>
                  <h2>About Us</h2>
                  <p>Real estate is land plus any property or resources on it. For millions of people, real estate — in the form of their homes — is the largest investment they will ever make, and the single most valuable asset they’ll ever own.</p>
               </div> 
            </div>
        </div>
       </div>
    </div>
  )
}

export default AboutHeader