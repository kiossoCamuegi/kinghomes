import React from 'react'
import ImageLazyLoading from './ImageLazyLoading'

function AddsBanner() {
  return (
    <div className='adds-banner'>
       <a href="http://" target="_blank" rel="noopener noreferrer">
          <ImageLazyLoading source="https://www.unitel.st/img/slide/banner_bignet_site.png" />
       </a>
    </div>
  )
}

export default AddsBanner