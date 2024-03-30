import React, { useEffect, useState } from 'react'
import ImageLazyLoading from './Components/ImageLazyLoading'
import { Link } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs";
import {SiLichess} from "react-icons/si";
import {FcGoogle} from "react-icons/fc";
import Hoot from './Components/Hoot';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Signin() {
  document.title = "Signin";

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
          <ImageLazyLoading source="https://www.tlcinteriors.com.au/wp-content/uploads/2020/09/modern-dark-neutral-living-room-with-marble-feature-wall-with-timber-accents-and-luxe-furniture.jpg" height={740} />
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
                      <h1>Login</h1>
                      <p>Tudo o que você precisa saber sobre a compra de uma casa mal-assombrada, as casas mal-assombradas estão rotuladas</p>
                      <div className="buttons">
                      <button  onClick={GoogleAuth} className="btn-account btn"><div className="icon"><FcGoogle/></div><div className='text'><span>Continuar com conta Google </span></div></button> 
                      <Link to="/"><button className="back-button btn text-light"><BsArrowLeft/> Voltar a pagina inicial</button></Link>
                      </div>
                      <div className="d-flex mt-2">Não tem uma conta  ? <Link to="/signup"> Cadastre-se</Link></div>
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

export default Signin