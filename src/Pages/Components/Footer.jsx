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
                      <h3>Pages</h3>
                      <ul>
                         <li><Link to="#">Home</Link></li>
                         <li><Link to="#">Search</Link></li>
                         <li><Link to="#">Blog</Link></li>
                         <li><Link to="#">About Us</Link></li>
                      </ul>
                  </section>
                  <section>
                      <h3>Features</h3>
                      <ul>
                         <li><Link to="#">Find Houses</Link></li>
                         <li><Link to="#">Book Hotels</Link></li>
                         <li><Link to="#">Reviews</Link></li> 
                      </ul>
                  </section>
                  <section>
                      <h3>Cookies</h3>
                      <ul>
                         <li><Link to="#">Data Collect</Link></li>
                         <li><Link to="#">Terms</Link></li>
                         <li><Link to="#">Privacy</Link></li>
                         <li><Link to="#">Laws</Link></li> 
                      </ul>
                  </section>
                  <div className="footer-box">
                       <div className="space">
                           <div><h3>Don't Wanna <br />Miss Our Offers ?</h3> </div>
                           <p>Lorem ipsum dolor sit  Vero, assumenda delectus.</p>
                       </div>
                       <Form>
                           <Form.Control placeholder='Your email@gmail.com' />
                           <button className="btn text-light">Subscribe</button>
                       </Form>
                       <div className="logo"><div className="icon"><SiLichess /></div></div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Footer