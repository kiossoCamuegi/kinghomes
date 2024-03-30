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
                  <h2>Sobre nós</h2>
                  <p>Imóveis são terrenos mais quaisquer propriedades ou recursos nele contidos. Para milhões de pessoas, o imobiliário – sob a forma de casas – é o maior investimento que alguma vez farão e o bem mais valioso que alguma vez possuirão.</p>
               </div> 
            </div>
        </div>
       </div>
    </div>
  )
}

export default AboutHeader