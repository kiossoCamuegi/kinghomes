import React from 'react'
import ImageLazyLoading from './ImageLazyLoading'

function AddsBanner() {
  return (
    <div className='adds-banner'>
       <a href="http://" target="_blank" rel="noopener noreferrer">
          <ImageLazyLoading source="https://m.media-amazon.com/images/G/32/em/pd22/Onsite/associates/0073_PD22_LU_Associates_01_2148x588.jpg" />
       </a>
    </div>
  )
}

export default AddsBanner