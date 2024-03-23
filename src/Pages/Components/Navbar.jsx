import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import {SiLichess} from "react-icons/si";
import {CgMenuMotion} from "react-icons/cg";
import {AiOutlineClose}from "react-icons/ai";
import axios from 'axios';
import Hoot from './Hoot';
import { Avatar } from '@mui/material';

function Navbar({active, fixed}){
    const [stickyClass, setStickyClass] = useState(false);
    const [Toggle, setToggle] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar); 
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY; 
        windowHeight >= 400 ? setStickyClass(true) : setStickyClass(false);
      }
    }; 

  

    const [Data, setData] = useState(null)
    const  [Load, setLoaded] =  useState(false);

    const CheckUserStatus = async()=>{
         try {
           const response =  await axios.get(Hoot()+"checkuserstatus");   
           setData((response.data.userid === null || response.data.userid  === undefined) ? null : response.data.image); 
           setLoaded(true)
         } catch (error) { 
           console.log(error)
           setData(null); 
           setLoaded(true)
         }
    }
   
     useEffect(()=>{
       CheckUserStatus();
     },[]); 
   



  return (
    <div className={stickyClass === true ? "fd-navbar fixed" : `fd-navbar ${fixed == true ? "fixed" : ""}`}>
       <div className="wrapper">
          <div className="content">
             <div className="logo-area">
             <Link to="/">
               <div className="logo">
                 <strong><SiLichess /> KingHomes </strong>
               </div>
              </Link>
             </div>
            <div className="fd-menu">
                <li className={active === 1 ? 'active' : ""}><Link to="/">Início</Link> </li>
                <li className={active === 2 ? 'active' : ""}><Link to="/about">Sobre nos</Link> </li>
                <li className={active === 5 ? 'active' : ""}><Link to="/post_something">Anunciar</Link> </li> 
                <li className={active === 3 ? 'active' : ""}><Link to="/properties">Comprar & Alugar</Link> </li> 
                <li className={active === 4 ? 'active' : ""}><Link to="/contacts">Contatos</Link> </li>  
                <> {Load === true ? <>
                  {Data !== null ?  <> <Link to="/dashboard"><Avatar src={Data} sx={{width:50,height:50}} /></Link></> : 
                  <>
                    <Link to="/signin"><button className="btn btn-border text-light">Login</button></Link>
                  <Link to="/signup"><button className="btn bg-white text-dark">Cadastrar</button></Link>
                  </>} </> : <></>}
                </> 
            </div>
            <div className="toggle-menu bl" onClick={()=>setToggle(Toggle === true ? false : true)}><CgMenuMotion/> </div>
            <div className={Toggle === true ? "responsive-menu show" : "responsive-menu"}>
            <div className="toggle-menu" onClick={()=>setToggle(Toggle === true ? false : true)}><AiOutlineClose/> </div>
                <ul>
                <li className={active === 1 ? 'active' : ""}><Link to="/">Início</Link> </li>
                <li className={active === 2 ? 'active' : ""}><Link to="/about">Sobre nos</Link> </li>
                <li className={active === 5 ? 'active' : ""}><Link to="/post_something">Anunciar</Link> </li> 
                <li className={active === 3 ? 'active' : ""}><Link to="/properties">Comprar & Alugar</Link> </li> 
                <li className={active === 4 ? 'active' : ""}><Link to="/contacts">Contatos</Link> </li>  
                <> {Load === true ? <>
                  {Data !== null ?  <> <Link to="/dashboard"><Avatar src={Data} sx={{width:50,height:50}} /></Link></> : 
                  <>
                    <Link to="/signin"><button className="btn btn-border text-light">Login</button></Link>
                  <Link to="/signup"><button className="btn bg-white text-dark">Cadastrar</button></Link>
                  </>} </> : <></>}
                </> 
                </ul>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Navbar