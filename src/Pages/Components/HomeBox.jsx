import React from 'react'
import ImageLazyLoading from './ImageLazyLoading'
import { Link } from 'react-router-dom'
import {AiFillStar} from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs";

function HomeBox({data, type}){
  return (
    <div className='home-box'>
        <div className={`box ${type}`} >
         <ImageLazyLoading source={data.src} height={540} />
            <div className="over">
                <h3>{data.title}</h3> 
                {type === "cm" ? <p>{data.location}</p> : <></>}
                <div className="d-space">
                <div className="d-flex f">
                   {type !== "cm" ? <p>{data.location}</p> : <></>}
                    <div className="dot"></div>
                    <div className="rv d-flex">
                        <div className="st selected"><AiFillStar/></div>
                        <div className="st selected"><AiFillStar/></div>
                        <div className="st selected"><AiFillStar/></div>
                        <div className="st selected"><AiFillStar/></div>
                        <div className="st"><AiFillStar/></div>  
                        <span>({data.visitors} visitors)</span>  
                    </div>
                </div>
                <div className="vw">
                    <Link to="#"> <BsArrowRight/> </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBox