import React from 'react'
import ImageLazyLoading from './ImageLazyLoading'
import HeaderSearch from './HeaderSearch'

function Header() {
  return (
    <div className='fd-header'>
        <div className="image-area">
            <ImageLazyLoading source="https://ik.imagekit.io/9gf6vyngo/v1/wp-content/uploads/2023/04/interior-design-living-room.jpg"  height={1300} />
        </div>
      <div className="header-content">
       <div className="wrapper">
           <div className="ct">
           <div className="content">
            <section className='text'>
                <h1>Stay Quietly, <br /> With No Worries<span className="txt">.</span> </h1>
                <p>
                    For those who seek an exceptional home and life, there is only KingHomes International Realty. 
                  Built on centuries of tradition and dedicated to innovating the luxury real estate industry,
                   KingHomes International Realty offers transformative experiences through a global network of exceptional agents.
               </p>
            </section>
            <section className='result-text'>
                  <div className="block">
                      <h2>12K+</h2>
                      <span>Satisfied Visitors</span>
                  </div>
                  <div className="block">
                     <h2>4.5K+</h2>
                     <span>Amazing Hotels</span>
                  </div>
                  <div className="block">
                      <h2>2K+</h2>
                      <span>Website Requests</span>
                  </div>
            </section>
          </div>
          <HeaderSearch/>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Header