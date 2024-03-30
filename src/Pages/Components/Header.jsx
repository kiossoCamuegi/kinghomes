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
                <h1>Fique calmo, <br /> Sem preocupações<span className="txt">.</span> </h1>
                <p>
                Para quem busca uma casa e uma vida excepcionais, existe apenas a KingHomes International Realty. Construída com base em séculos de tradição e dedicada a inovar o setor imobiliário de luxo, a KingHomes International Realty oferece experiências transformadoras por meio de uma rede global de agentes excepcionais.   
               </p>
            </section>
            <section className='result-text'>
                  <div className="block">
                      <h2>12K+</h2>
                      <span>Visitantes mensais</span>
                  </div>
                  <div className="block">
                     <h2>4.5K+</h2>
                     <span>Anúncios feitos</span>
                  </div>
                  <div className="block">
                      <h2>2K+</h2>
                      <span>Usúarios online</span>
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