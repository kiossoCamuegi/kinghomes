import React from 'react'
import { Form } from 'react-bootstrap'
import {BiMessageSquareDetail} from "react-icons/bi";

function ContactForm() {
  return (
    <div className='contact-form'>
        <div className="ct-header">
            <div className="icon"><BiMessageSquareDetail/></div>
            <div className="text">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit <strong>KingHomes</strong> eos praesentium nam vel modi.</span>
            </div>
        </div>
        <div className="form-content">
            <Form>
                <div className="message">

                </div>
                <div className="d-flex">
                    <div className='mt-4'><Form.Control placeholder='Your name ...' type='text' required /></div>
                    <div className='mt-4'><Form.Control placeholder='Your email ...' type='email' required /></div>
                </div>
                <div className="d-flex">
                    <div className='mt-4'><Form.Control placeholder='Your phone ...' type='tel' required /></div>
                    <div className='mt-4'><Form.Control placeholder='Your company ...' type='text' required /></div>
                </div>
                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control placeholder='...' as="textarea" rows={9} />
                </Form.Group>
                <button className="btn text-light">Send</button>
            </Form>
        </div>
    </div>
  )
}

export default ContactForm