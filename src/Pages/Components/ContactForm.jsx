import React from 'react'
import { Form } from 'react-bootstrap'
import {BiMessageSquareDetail} from "react-icons/bi";

function ContactForm() {
  return (
    <div className='contact-form'>
        <div className="ct-header">
            <div className="icon"><BiMessageSquareDetail/></div>
            <div className="text">
                <span>Deseja fazer uma parceria, anuncio, ou agum tipo de reclamação <strong>KingHomes</strong> fale com a nossa equipe</span>
            </div>
        </div>
        <div className="form-content">
            <Form>
                <div className="message">

                </div>
                <div className="d-flex">
                    <div className='mt-4'><Form.Control placeholder='Seu nome ...' type='text' required /></div>
                    <div className='mt-4'><Form.Control placeholder='Seu email ...' type='email' required /></div>
                </div>
                <div className="d-flex">
                    <div className='mt-4'><Form.Control placeholder='Seu telefone ...' type='tel' required /></div>
                    <div className='mt-4'><Form.Control placeholder='Sua Empresa ...' type='text' required /></div>
                </div>
                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control placeholder='...' as="textarea" rows={9} />
                </Form.Group>
                <button className="btn text-light">Enviar</button>
            </Form>
        </div>
    </div>
  )
}

export default ContactForm