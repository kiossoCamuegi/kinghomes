import React from 'react'
import ImageLazyLoading from './Components/ImageLazyLoading'

function AboutText({bg, text, title, image, pos}){
  return (
    <div className={`about-block ${bg}`} >
        <div className="wrapper">
            <div className={`content ${pos}`}>
                  <section className='text'>
                    <div className="line">
                        <div className="bar"></div>
                        <div className=""></div>
                    </div>
                     <h3>{title}</h3>
                     <div className="description">
                        {text}
                     </div>
                  </section>
                  <section className='image'>
                       <ImageLazyLoading source={image}  height={350} />
                  </section>
            </div>
        </div>
    </div>
  )
}

export default AboutText