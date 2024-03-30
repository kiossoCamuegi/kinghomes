import React from 'react'
import styled from "styled-components";
import ImageLazyLoading from './ImageLazyLoading';
import { Link } from 'react-router-dom'; 
import { RiBuilding3Line } from "react-icons/ri";
import { RiBuildingLine } from "react-icons/ri";
import { BsHouses } from "react-icons/bs"; 
import { GiHighGrass } from "react-icons/gi";
import { PiOfficeChairBold } from "react-icons/pi";
import { TbBuildingCommunity } from "react-icons/tb"; 

function CategoriesSections() {

const Data = [
  /*
    {
      link:"",
      icon:<><RiBuilding3Line /></>,
      title:"Armazens",
      image:""
   }, 
   
   */
   {
    link:"",
    icon:<><RiBuildingLine/></>,
    title:"Apartamentos",
    image:"https://www.sobha.com/blog/wp-content/uploads/2023/07/Apartment-Complex.png"
 }, 
 {
    link:"",
    icon:<><BsHouses/></>,
    title:"Casas",
    image:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
 }, 
 {
    link:"",
    icon:<><GiHighGrass /></>,
    title:"Terrenos & Espaços",
    image:"https://dutraadvogados.com.br/wp-content/uploads/2021/01/img-comprei-um-terreno-mas-quero-desistir-o-que-fazer.jpg"
 }, 
 {
    link:"",
    icon:<><PiOfficeChairBold /></>,
    title:"Escritorios",
    image:"https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2014/10/13/10141013homeofficedecoracao.jpg"
 },  
 {
    link:"",
    icon:<><TbBuildingCommunity/></>,
    title:"Emprendimentos",
    image:"https://static.vecteezy.com/system/resources/thumbnails/008/526/490/small/modern-building-office-and-blue-sky-background-3d-rendering-photo.jpg"
 },  
];

const responsive = [
    { breakPoint: 1280, cardsToShow: 5 },  
    { breakPoint: 1000, cardsToShow: 4 },
    { breakPoint: 950, cardsToShow: 3 },    
    { breakPoint: 760, cardsToShow: 2 },
    { breakPoint: 600, cardsToShow: 1.5 },  
];






  return (
    <div>
        <div className="wrapper">
        <Container reponsive={responsive}>
        {Data.map((item, index)=>{
                return(
             <article key={index}>
                <Link to={item.link} >
                    <div className='block-center'>
                        <div className="image">
                        <ImageLazyLoading source={item.image} height={200} />
                        <div className="over">
                            <div className="icon">{item.icon}</div>
                        </div>
                        </div>
                        <div className="dets"><h2>{item.title}</h2></div>
                    </div>
                </Link>
             </article>
            )})}
         </Container> 
        </div>
    </div>
  )
}

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
    margin:20px 0px; 

    article{
       width:220px;
       height:250px;
       margin:15px;
       

       a{
         color:var(--dark);
       }


       h2{
            text-align:center;
            font-size:20px;
            margin:10px 0px;
            color:var(--dark);
       }

         .image{
            width:200px;
            height:200px;
            border-radius:100%;
            overflow:hidden; 
            position:relative;

            
         img{
            object-fit:cover;
            width:100%;
            height:100%;
        }

              .over{
                 position:absolute;
                 top:0px;
                 left:0px;
                 width:100%;
                 height:100%;
                 background:rgba(0,0,0,0.4);
                 display:flex; 
                 justify-content:center;
                 align-items:center;

                    svg{
                        width:60px;
                        height:60px;
                        color:#ffff;
                    }
              }
         }


    }



`;

export default CategoriesSections