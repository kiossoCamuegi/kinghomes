import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {SiLichess} from "react-icons/si";

function Footer() {
  return (
    <div className='fd-footer'>
        <div className="wrapper">
            <div className="content">
                  <section>
                      <h3>Paginas</h3>
                      <ul>
                         <li><Link to="#">Início</Link></li>
                         <li><Link to="#">Pesquisar</Link></li>
                         <li><Link to="#">Blog</Link></li>
                         <li><Link to="#">Sobre nós</Link></li>
                      </ul>
                  </section>
                  <section>
                      <h3>Recursos</h3>
                      <ul>
                         <li><Link to="#">Ecomtrar casas</Link></li>
                         <li><Link to="#">Emcontrar Hoteis</Link></li>
                         <li><Link to="#">Emcontrar terrenos</Link></li> 
                      </ul>
                  </section>
                  <section>
                      <h3>Cookies</h3>
                      <ul>
                         <li><Link to="#">Coleta de dados</Link></li>
                         <li><Link to="#">Termos e usos</Link></li>
                         <li><Link to="#">Privacidade</Link></li>
                         <li><Link to="#">Regras de segurança</Link></li> 
                      </ul>
                  </section>
                  <div className="footer-box">
                       <div className="space">
                           <div><h3>Não quer <br />Perder nossas ofertas ?</h3> </div>
                           <p>Subscreva ao insirir o seu email</p>
                       </div>
                       <Form>
                           <Form.Control placeholder='Seu email@gmail.com' />
                           <button className="btn text-light">Subscrever</button>
                       </Form>
                       <div className="logo"><div className="icon"><SiLichess /></div></div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Footer