import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hoot from './Hoot';
import ImageGallery from "react-image-gallery";
import parse from 'html-react-parser';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import {MdOutlineBusiness,MdOutlineRemoveRedEye,MdOutlineLocationOn} from "react-icons/md";
import Skeleton from '@mui/material/Skeleton';
import GetImages from './GetImages';
import AddsBanner from  "./AddsBanner";
var getYouTubeID = require('get-youtube-id');

  
function DetailsArea() {
   const {ID}= useParams()
   const [Data, setData] = useState({});
   const [Text, setText] = useState("");
   const [Images, setImages] = useState([]);
   const [Founded, setFounded] = useState(false);
   const [Youtube, setYoutube] = useState(null);

   const LoadData =  async()=>{
       try {
        const response = await axios.get(Hoot()+"homesget/"+ID);
        console.clear(); 
        console.log(response.data);
        if(response.data.content){
           setData(response.data.content);
           if(typeof  response.data.files === "object"){
            const Data = [];
            response.data.files.map((item, index)=>{
                Data.push({original:GetImages(item.name) ,  thumbnail:GetImages(item.name)});
            });
           setImages(Data); 
           setText(response.data.content.description);
           document.title = "KingHomes - "+response.data.content.title;
           setYoutube(getYouTubeID(response.data.content.youtube))
           }
           setFounded(true);
           
           await axios.patch(Hoot()+"updatehomevisitors/"+ID).then((e)=>{   
            console.log(e) 
          }).catch((error)=>{ 
            console.log(error) 
          }); 

        }else{
          setFounded(false);
        }
       } catch (error) {
        setFounded(false);
        console.clear();
        console.log(error);
       }
   }


   useEffect(()=>{
    LoadData();
   },[]);


  return (
    <div className='fd-details-page'>
       {Founded !== false  ? 
       <aside>
         <br /><br />  
        <div className="images">
            <ImageGallery items={Images} />
        </div> 
       <div className="wrapper"> 
           <div className="content">
               <div className="p-box"> 
                     <div className="price mb-2 mt-2">Preço : <h4 className='text-success'>$ {Data.price}</h4></div>
                   <div className="title"><h1>{Data.title}</h1></div>
                   <div className="location"><MdOutlineLocationOn/> <h4>{Data.location}</h4></div>
                   <div className='type'><MdOutlineBusiness/><h4>Tipo de imovel : {Data.type*1 === 0 ? "Comprar" : "Alugar"}</h4></div>
                   <div className='type mt-2'><MdOutlineRemoveRedEye/><h4>{Data.visitors} pessoas visitaram esta pagina </h4></div>
                   <br />
                   <div className="video-area">
                     {Youtube !== null ? <>
                      <iframe src={`https://www.youtube.com/embed/${Youtube}?si=L86-tlyylpOHiIce`}
                      title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                     </> : <></> } 
                   </div>
                    <section className="description">{parse(Text)}</section> 
               </div> 
           </div>
           <br />
            <AddsBanner />
           <br />
       </div>
      </aside> 
       :
       <aside>
       <div>
          <Skeleton animation="wave"  sx={{width:"100%",height:"400px",marginTop:"-50px"}}  />
       </div>
       <div className="wrapper ">
         <div className="content">
             <div className="p-box"> 
                   <div className="price  mb-2 mt-2">  <Skeleton animation="wave"  sx={{width:"40%",height:"25px"}}  /></div>
                 <div className="title"><Skeleton animation="wave"  sx={{width:"80%",height:"50px"}}  /></div>
                 <div className="location"><Skeleton animation="wave"  sx={{width:"50%",height:"20px"}} /> </div>
                 <div className='type'><Skeleton animation="wave"  sx={{width:"40%",height:"20px"}}  /> </div>
                 <div className="video-areas">
                    <Skeleton animation="wave" sx={{width:"100%",height:"200px"}}   /> 
                 </div>
                  <section className="description">
                  <Skeleton animation="wave"  sx={{width:"90%",height:"40px"}} /> <br/>
                  <Skeleton animation="wave"  sx={{width:"90%",height:"20px"}}  /> <br/>
                  <Skeleton animation="wave"  sx={{width:"90%",height:"20px"}} /> <br/>
                  <Skeleton animation="wave"  sx={{width:"90%",height:"20px"}} /> <br/>
                  <Skeleton animation="wave"  sx={{width:"90%",height:"20px"}} /> <br/> 
                </section> 
             </div> 
         </div>
         <br /><br />
     </div>
     </aside>
       }
       



      




    </div>
  )
}

export default DetailsArea