import React from 'react'
import { Link } from 'react-router-dom';
import {AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import {BsFacebook, BsInstagram} from "react-icons/bs";
import ImageLazyLoading from './ImageLazyLoading';

function ContactHeader() {
  return (
    <div className='contact-header'>
       <div className="cover-image">
          <ImageLazyLoading source="https://www.christiesrealestate.com/blog/wp-content/uploads/2018/08/BeoSound_shape_Lifestyle_11_banner.jpg"  height={350} />
       </div>
       <div className="over-box">
       <div className="wrapper">
            <div className="block-text">
               <div>
                  <h2>Contact Us</h2>
                  <p>Looking for new ideias to find or sale some spot ?</p>
               </div>
               <ul className='d-flex'>
                   <li><Link to="#"><AiFillLinkedin/></Link> </li>
                   <li><Link to="#"><AiFillYoutube/></Link> </li>
                   <li><Link to="#"><BsFacebook/></Link> </li>
                   <li><Link to="#"><BsInstagram/></Link> </li>
               </ul>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ContactHeader