import React, { useEffect, useState } from 'react'
import PrCard from './PrCard';
import { Form } from 'react-bootstrap';
import {CiLocationOn} from "react-icons/ci";
import {BsCursorText} from "react-icons/bs"
import {BiSelection} from "react-icons/bi"
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Hoot from './Hoot';
import { useSearchParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { Circles } from 'react-loader-spinner';

function ProductsSearch() {      
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
        if(index <= 5){
          rows.push({
            title:item.content.title,
            price:item.content.price,
            location:item.content.location,
            visitors:item.content.visitors,
            type:item.content.type,
            code:item.content._id,
            image:item.files.length >= 1 ? Hoot()+"images/"+item.files[0].name : "https://inforpress.cv/wp-content/uploads/2020/05/empty.jpg"
          });
        }
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
    <div className='fd-products-page'>
        <br /><br /> <br /> <br />
       <div className="wrapper">
           <div className="content">
           <div className="sidebar-area"> 
            <Form onSubmit={Search} >
            <h1>Aplicar Filtros</h1>
            <div className="block">
                <Form.Label><div className="ed-flex"><BsCursorText/> <span>Keywords</span></div></Form.Label>
                <Form.Control placeholder='...' required value={Text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><CiLocationOn/> <span>Location</span></div></Form.Label>
                <Form.Control placeholder='...' value={Location} required onChange={(e)=>setLocation(e.target.value)}  />
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><BiSelection/> <span>Type</span></div></Form.Label>
                <Form.Select value={Type} onChange={(e)=>setType(e.target.value)} >
                     <option value="0">For sale</option>
                     <option value="1">For rent</option>
                </Form.Select>
            </div>
            <button className="btn text-light">Search</button>  

            </Form>
            </div> 
              <div className="pr-section col">
                  {Load === true ?
                    <>
                     <span className="total">{Data.length} items founded on list </span>   
                     <PaginatedItems Data={Data} itemsPerPage={9} /> 
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
              </div>
           </div>
       </div>
       <br /><br />
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
        {currentItems.length >= 10 ? <ReactPaginate breakLabel="..." renderOnZeroPageCount={null} /> : <></>};
      </>
    );
  }
  

export default ProductsSearch