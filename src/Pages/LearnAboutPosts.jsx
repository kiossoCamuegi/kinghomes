import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Link } from 'react-router-dom'

function LearnAboutPosts() {
  return (
    <div>
        <Navbar active={5}  fixed />
           <div className="advirtisement-page">
           <br /><br />     <br /><br />     <br /><br />
             <div className="post-details">
                <div className="form-box">
                    <div className="form-area">
                        <h3>Informação útil</h3>
                         <p>Prepara as fotos. Se ainda não as tens, poderás adicioná-las mais tarde. Sem fotos não obterás resultados.
                          Oferecemos-te os dois primeiros anúncios para que experimentes o nosso serviço. Podes publicar anúncios grátis de apartamentos, moradias, terrenos, espaços comerciais, etc. até que o vendas ou arrendes.
                         <br /><br />
                          Além disso, podes publicar até 5 quartos grátis, em imóveis para partilhar, que não se somam ao número de anúncios que te oferecemos.
                          <br /><br />
                          Para garantir a qualidade dos nossos serviços, cobramos uma taxa nos seguintes casos:
                          </p>
                          <ol>
                              <li>anunciantes com mais de dois imóveis</li>
                              <li>anunciantes de imóveis duplicados</li>
                              <li>imóveis à venda por mais de 1.000.000 de euros</li>
                              <li>imóveis em arrendamento por mais de 2.500 €/mês</li>
                          </ol>
                          <hr />
                          <Link to="/signin"><button className="btn btn-border">Faça Login para anunciar agora </button></Link>
                    </div>
                </div>
             </div>
           <br /><br /><br /><br />
           </div>
        <Footer />
    </div>
  )
}

export default LearnAboutPosts