import React, { useEffect, useState } from 'react'
import ImageLazyLoading from './Components/ImageLazyLoading'
import { Link } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs";
import {SiLichess} from "react-icons/si";
import {FcGoogle} from "react-icons/fc";
import Hoot from './Components/Hoot'; 
import axios from 'axios';
import { redirect } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


function Signup() {
 document.title = "Signup"; 
const  GoogleAuth = async() =>{
  window.open(Hoot()+"googleuserauthentication/signup", "_self"); 
}

const navigate = useNavigate();
const [Data, setData] = useState(null);
const  [Loaded, setLoaded] =  useState(false);
const CheckUserStatus = async()=>{
     try {
       const response =  await axios.get(Hoot()+"checkuserstatus");
       setData((response.data.userid === null || response.data.userid  === undefined) ? null : response.data);
       if(response.data.userid !== null && response.data.userid  !== undefined)  navigate('/dashboard');
       setLoaded(true);
     } catch (error) {
       setData(null);  
       setLoaded(true);
     }
}

 useEffect(()=>{
   CheckUserStatus();
 },[]);

  return ( 
    <>
      {Loaded === true ?   
         <>
         {Data === null ?
              <div className='authentication-area'>
              <div className="cover-image">
                 <ImageLazyLoading source="https://www.build-review.com/wp-content/uploads/2022/09/Dark-Interior.jpg" height={740} />
              </div>
              <div className="over-data">
                 <div className="wrapper">
                       <div className="content">
                              <div className="logo-area">
                              <Link to="/">
                              <div className="logo">
                                  <strong><SiLichess /> KingHomes </strong>
                              </div>
                              </Link>
                           </div>
                          <div className="form-box">
                          <div className="form-area">
                              <h1>Signup</h1>
                              <p>Don’t miss out on the right home for you — browse up-to-date listings, refine your search and more.</p>
                              <div className="buttons">
                              <button className="btn-account btn" onClick={GoogleAuth} ><div className="icon"><FcGoogle/></div><div className='text'><span>signup with Google</span></div></button>
                              <Link to="/"><button className="back-button btn text-light"><BsArrowLeft/> Go back to home</button></Link>
                              </div>
                             <div className="d-flex mt-2">Already have an account ?<Link  to="/signin">Signin</Link></div>
                          </div>  
                          </div>
                     </div>
                 </div>
              </div>
          </div>
         : <></>
         }
      </>
      : <></>}
    </> 
  );
}

export default Signup