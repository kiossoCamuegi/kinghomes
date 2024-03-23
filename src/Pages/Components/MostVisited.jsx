import React from 'react'
import ImageLazyLoading from './ImageLazyLoading'
import { Link } from 'react-router-dom'
import {AiFillStar} from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs";
import HomeBox from './HomeBox';

function MostVisited() {
  const Data = [
    {
      title:"Oasis sands Resort Homestay", visitors:123, code:"8398393",location:"Launda, Angola,   Mutamba",
      src:"https://i.ebayimg.com/thumbs/images/g/kLgAAOSw2k5lMIch/s-l1200.jpg"
    },
    {
      title:"Yelow Blue room for Nasty ", visitors:123, code:"8398393",location:"Launda, Angola,   Mutamba",
      src:"https://assets-news.housing.com/news/wp-content/uploads/2018/01/30130410/Decor-trends-that-will-define-2018-FB-1200x700-compressed.jpg"
    },
    {
      title:"Relaxing room for mans", visitors:123, code:"8398393",location:"Launda, Angola,   Mutamba",
      src:"https://www.nobroker.in/blog/wp-content/uploads/2021/07/home-decor-trends.jpg"
    }  
  ];


  return (
    <div className='fd-visited'>
        <div className="watermark left">
           <h1>Amazing</h1>
        </div>
        <div className="wrapper">
              <div className="text-block-area center">
                  <h2>Espaços fabulosos <br /> Visitados recentemente em 2024!</h2>
                 <p>Ta Querendo Comprar Barato? Compre Rápido, Sem Fiador E Livre De Burocracia. O Melhor Jeito De Comprar é aqui.</p>
              </div>
              <div className="content">
                  <div className="block bx">
                     <HomeBox type="lg" data={Data[0]} />
                  </div>
                  <div className="block pd">  
                      <HomeBox type="md" data={Data[1]} />
                      <HomeBox type="md" data={Data[2]} />
                  </div> 
              </div>
        </div>
    </div>
  )
}

export default MostVisited