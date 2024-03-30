import React, { useEffect, useState } from 'react'
import PrCard from './PrCard';
import { Form } from 'react-bootstrap';
import {CiLocationOn} from "react-icons/ci";
import {BsCursorText} from "react-icons/bs"
import {BiSelection} from "react-icons/bi"
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Hoot from './Hoot';
import { Link, useSearchParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import GetImages from './GetImages';
import AddsBanner from './AddsBanner';
import { TbCoinPound } from "react-icons/tb";
import { RiMapPin5Line } from "react-icons/ri";
import { BiCoin } from "react-icons/bi";
import { BsBuildingAdd } from "react-icons/bs";


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
    <div className='fd-products-page'>
        <br /><br /> <br /> <br />
       <div className="wrapper">
           <div className="content">
           <div className="sidebar-area"> 
            <Form onSubmit={Search} >
            <h1>Aplicar Filtros</h1>
            <div className="block">
                <Form.Label><div className="ed-flex"><BsCursorText/> <span>Palavras Chaves</span></div></Form.Label>
                <Form.Control placeholder='...' required value={Text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><CiLocationOn/> <span>Localização</span></div></Form.Label>
                <Form.Control placeholder='...' value={Location} required onChange={(e)=>setLocation(e.target.value)}  />
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><BiSelection/> <span>Tipo de negocio</span></div></Form.Label>
                <Form.Select value={Type} onChange={(e)=>setType(e.target.value)} >
                     <option value="0">Para comprar</option>
                     <option value="1">Para vender</option>
                </Form.Select>
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><BiCoin /> <span>Moeda</span></div></Form.Label>
                <Form.Select value={Type} onChange={(e)=>setType(e.target.value)} >
                     <option value="0">Kwanza (Kz)</option>
                     <option value="1">Euro (€)</option>
                     <option value="3">Dolar ($) </option> 
                </Form.Select>
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><BsBuildingAdd /><span> Categoria</span></div></Form.Label>
                <Form.Select value={Type} onChange={(e)=>setType(e.target.value)} >
                     <option value="0">Todos</option>
                     <option value="1">Casa</option>
                     <option value="2">Apartamento</option>
                     <option value="3">Armazem</option>
                     <option value="4">Terrenos e espaços</option>
                     <option value="5">Escritorios</option> 
                </Form.Select>
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><TbCoinPound /> <span>Preço</span></div></Form.Label>
                <div className="d-flex">
                   <Form.Control placeholder='MIN' type="number" required onChange={(e)=>setLocation(e.target.value)}  />
                   <div className="pd-1"></div>
                   <Form.Control placeholder='MAX' type="number" required onChange={(e)=>setLocation(e.target.value)}  />
                </div>
            </div>
            <button className="btn text-light">Pesquisar</button>  

            </Form>
            </div> 
              <div className="pr-section col">
                  {Load === true ?
                    <>
                    <div className="space">
                      <div>
                        <span className="total">{Data.length} moveis encomtrados na lista </span>  
                      </div>
                      <div>
                           <Link to="/properties_map">
                             <div className="link-box"><RiMapPin5Line /> ver no mapa</div>
                           </Link>
                      </div>
                    </div>  
                       <PaginatedItems Data={Data} itemsPerPage={9} />  
                    </>
                  :
                  <>
                  <div className="loading-area ">
                    <Circles   height="140"  width="140"  color="#FF6D00"  ariaLabel="circles-loading"
                    wrapperStyle={{}}  wrapperClass=""  visible={true}
                    />
                    </div>
                  </>  
                  } 
 
              </div> 
           </div>
           
           <div>  
             <br />
             <AddsBanner />
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
        <div>
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
  

export default ProductsSearch