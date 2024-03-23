import React, { useEffect, useState } from 'react'
import PrCard from './PrCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hoot from './Hoot';
import { Circles } from 'react-loader-spinner';
import GetImages from './GetImages';

function ExploreProducts() {
    
    const Products = [
        {
            title:"Home village at Mainga  T4", price:"$84.00", code:"653eab0569a91c6fe24c398c", visitors:52,location:"Angola, Luanda - Mutamba",
            image:"https://images.trvl-media.com/lodging/49000000/48450000/48448000/48447932/6f9dd848.jpg?impolicy=resizecrop&rw=500&ra=fit"
       },
       {
        title:"Home village at Mainga  T4", price:"$84.00", code:"#", visitors:52,location:"Angola, Luanda - Mutamba",
        image:"https://images.trvl-media.com/lodging/35000000/34110000/34109900/34109816/d8e03651.jpg?impolicy=resizecrop&rw=500&ra=fit"
       },
       {
        title:"Home village at Mainga  T4", price:"$84.00", code:"#", visitors:52,location:"Angola, Luanda - Mutamba",
        image:"https://i.pinimg.com/736x/aa/2b/24/aa2b241d7eff64b308e35c208fbedf5f.jpg"
       },
        {
            title:"Home village at Mainga  T4", price:"$84.00", code:"#", visitors:52,location:"Angola, Luanda - Mutamba",
            image:"https://tinyhouseblog.com/wp-content/uploads/2022/09/best-friends-backyard-tiny-home-village.jpg"
        },
        {
            title:"Home village at Mainga  T4", price:"$84.00", code:"#", visitors:52,location:"Angola, Luanda - Mutamba",
            image:"https://www.orlando-floridahotels.net/data/Pics/OriginalPhoto/14237/1423746/1423746006/pic-orlando-1.JPEG"
        },
        {
            title:"Home village at Mainga  T4", price:"$84.00", code:"#", visitors:52,location:"Angola, Luanda - Mutamba",
            image:"https://images.trvl-media.com/lodging/23000000/22210000/22208700/22208691/55554c16.jpg?impolicy=resizecrop&rw=500&ra=fit"
        },
    ];

    const  [Load, setLoaded] =  useState(false);
    const [Data, setData] =  useState([]);
    
    const LoadData = async()=>{
      try {
        const rows  = [];
        let response = await axios.get(Hoot()+"homes"); 
        console.clear()
        console.log(response)
        response.data.map((item,index)=>{
            if(index <= 5){
              rows.push({
                title:item.content.title,
                price:item.content.price,
                location:item.content.location,
                visitors:item.content.visitors,
                code:item.content._id,
                image:item.files.length >= 1 ? GetImages(item.files[0].name) : "https://inforpress.cv/wp-content/uploads/2020/05/empty.jpg"
              });
            }
        });
        setData(rows);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      LoadData()
    },[]);

 
  return (
    <div className='fd-explore'>
       
         <div className="watermark right">
           <h1>Explore</h1>
        </div>
        <div className="wrapper">
          <div className="text-block-area space">
                 <div> 
                    <h2>Explore os melhores <br />Imoveis !</h2>
                    <img src="https://drive.usercontent.google.com/download?id=12HPkymSHvsYRsLOzmfmy-ueP_hiFSdDD&authuser=0" alt="" />
                 </div>
                 <p>Quer comprar, vender ou alugar casa? No portal de Imobiliário temos milhares de apartamentos e moradias , aramazens, e qualquer tipo de imovel que pode imaginar.</p>
          </div>
          {Load === true ?
           <>
          <div className="products-container">
            {Data.map((item, index)=>{
               return(<PrCard length={30}  key={index} data={item} />)
            })}
           </div>
           <div className="center-box">
              <Link to="/properties"><button className="btn text-dark btn-border mt-4">Ver mais</button></Link>
           </div>
          </>
            :
            <>
            <br />
            <div className="loading-area ">
              <Circles   height="140"  width="140"  color="#9A3B3B"  ariaLabel="circles-loading"
              wrapperStyle={{}}  wrapperClass=""  visible={true}
              />
              </div>
            </>  
          } 
       </div> 
    </div>
  )
}

export default ExploreProducts