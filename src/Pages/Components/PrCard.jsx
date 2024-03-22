import React from 'react'
import ImageLazyLoading from './ImageLazyLoading';
import { Link } from 'react-router-dom'
import {AiFillStar} from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs";
import {CiLocationOn} from "react-icons/ci";
import ReduceTextLength from './ReduceTextLength';


function PrCard({data,length}) { 
  return (
    <div className='pr-card'>
        <div className="image">
          <ImageLazyLoading source={data.image} height={280} />
          <div className="location">
              <CiLocationOn/> <ReduceTextLength text={data.location} length={length} />  
          </div>
        </div>
       <Link to={"/property_details/"+data.code} ><h4 className="title"><ReduceTextLength text={data.title} length={length} /></h4></Link>
        <div className="dets">
        <div className="space-box">
        <div className="rv d-flex">
            <div className="st selected"><AiFillStar/></div>
            <div className="st selected"><AiFillStar/></div>
            <div className="st selected"><AiFillStar/></div>
            <div className="st selected"><AiFillStar/></div>
            <div className="st"><AiFillStar/></div>  
            <span>({data.visitors} visitors)</span>  
        </div>
        <div className="price">$ {data.price}</div>
        </div>
        <Link to={"/property_details/"+data.code}>
            <button className="btn text-light">Check now</button>    
        </Link>
       </div>
    </div>
  )
}

export default PrCard