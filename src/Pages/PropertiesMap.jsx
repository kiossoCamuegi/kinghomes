import React, { useEffect, useState } from 'react' 
import { Form } from 'react-bootstrap';
import {CiLocationOn} from "react-icons/ci";
import {BsCursorText} from "react-icons/bs"
import {BiSelection} from "react-icons/bi"
import ReactPaginate from 'react-paginate';
import axios from 'axios'; 
import { Link, useSearchParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { Circles } from 'react-loader-spinner'; 
import { TbCoinPound } from "react-icons/tb";
import { RiMapPin5Line } from "react-icons/ri";
import { BiCoin } from "react-icons/bi";
import PrCard from './Components/PrCard';
import Navbar from './Components/Navbar'
import GetImages from './Components/GetImages';
import Hoot from './Components/Hoot';
import { ImCoinEuro } from "react-icons/im";




function PropertiesMap() {
const [Data, setData] =  useState([]);
const [searchParams] = useSearchParams();
const navigate = useNavigate();
const [Text, setText] = useState(null);
const [Location, setLocation] = useState(null);
const [Type, setType] = useState(null);
const  [Load, setLoaded] =  useState(false);
const Search = (e)=>{
e.preventDefault();
navigate(`/properties?key=${Text}&loc=${Location}&type=${Type}`); 
}


document.title =  "Comprar & Alugar";

const LoadData = async()=>{
  try {
    let text = searchParams.get('key');
    let loc = searchParams.get('loc');
    let type = searchParams.get('type');

    if(text !== undefined && text !== "null") setText(text);
    if(loc !== undefined && loc !== "null") setLocation(loc);
    if(type !== undefined && type !== "null") setType(type); 

    const rows  = [];
    let response = await axios.get(Hoot()+"homes");  
    response.data.map((item,index)=>{
         
          rows.push({
            title:item.content.title,
            price:item.content.price,
            location:item.content.location,
            visitors:item.content.visitors,
            type:item.content.type,
            code:item.content._id,
            image:item.files.length >= 1 ? GetImages(item.files[0].name) : "https://inforpress.cv/wp-content/uploads/2020/05/empty.jpg"
          });
    
    });

 
    if((text !== undefined && text !== "null" && text !== null) || (loc !== undefined && loc !== "null" && loc !== null) ||
     (type !== undefined && type !== "null" && type !== null)){
      const FilterData = (rows)=>{ 
       if(type*1 <= 1){ 
        return rows.filter((item)=>
          item.title.toLowerCase().includes(text) &&
          item.location.toLowerCase().includes(loc) &&
          item.type.includes(type*1));  
       }else{ 
        return rows.filter((item)=>
          item.title.toLowerCase().includes(text) &&
          item.location.toLowerCase().includes(loc) 
      );}
    }
    setData(FilterData(rows)); 
  } else{
    setData(rows);  
  }
  setLoaded(true);  
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
  LoadData();
},[searchParams]);


  return (
    <div className="map-page ">
      <Navbar active={3} fixed /> 
      <div className="map-filter-area">
           <div className="space">
           <div className="d-flex">
           <div className="block"> 
                <Form.Control placeholder='Palavra chave...' required value={Text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="block ml-2"> 
                <Form.Control placeholder='Localização...' value={Location} required onChange={(e)=>setLocation(e.target.value)}  />
            </div>
           </div>
           <div className="d-flex">
           <div className="block ml-2"> 
                <Form.Select value={Type} onChange={(e)=>setType(e.target.value)} >
                     <option value="0">Para comprar</option>
                     <option value="1">Para vender</option>
                </Form.Select>
            </div>
            <div className="block ml-2"> 
                <Form.Select value={Type} onChange={(e)=>setType(e.target.value)} >
                     <option value="0">Kwanza (Kz)</option>
                     <option value="1">Euro (€)</option>
                     <option value="3">Dolar ($) </option> 
                </Form.Select>
            </div>
           </div>
          <div className="d-flex">
            <div className="block"> 
                <div className="d-flex prices align-center">
                  <div className="icon-coin"><ImCoinEuro /></div>
                   <Form.Control placeholder='MIN' type="number" required onChange={(e)=>setLocation(e.target.value)}  />
                   <div className="pd-1"></div>
                   <Form.Control placeholder='MAX' type="number" required onChange={(e)=>setLocation(e.target.value)}  />
                </div>
            </div>
          </div>
           </div>
       </div>
      <div className="map-content "> 
           {Load === true ?
                    <>
                    <aside className="products">
                      <div className="mt-2"> <span className="total">{Data.length} moveis encomtrados na lista </span>  </div>
                      <PaginatedItems Data={Data} itemsPerPage={10} /> 
                    </aside>  
                    </>
                  :
                  <>
                  <div className="loading-area ">
                    <Circles   height="140"  width="140"  color="#9A3B3B"  ariaLabel="circles-loading"
                    wrapperStyle={{}}  wrapperClass=""  visible={true}
                    />
                    </div>
                  </>  
                  }  
          <div className="map-box">
             <div className="mapouter">
               <div className="gmap_canvas">
                 <iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=amadora&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
               </div>
           </div>
          </div>
      </div>
    </div>
  )
}



function Items({currentItems}){
  return( 
    <div className="products-container">
     {currentItems &&
      currentItems.map((item,index)=>(
          <PrCard length={25} key={index} data={item} />
      ))}
   </div>
  )
}

function PaginatedItems({ itemsPerPage , Data }) {  
  const [itemOffset, setItemOffset] = useState(0); 
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage); 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length; 
    setItemOffset(newOffset);
  };


  return (
    <>
      <Items currentItems={currentItems} />
       <div className="center">
       <div className="pagination">
          <ReactPaginate 
          nextLabel=">"
          onPageChange={handlePageClick} 
          pageCount={pageCount}
          previousLabel="<"
          breakLabel="..." 
          renderOnZeroPageCount={null} /> 
      </div> 
       </div>
    </>
  );
}


export default PropertiesMap