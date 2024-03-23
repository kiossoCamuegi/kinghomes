import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import {CiLocationOn} from "react-icons/ci";
import {BsCursorText} from "react-icons/bs"
import {BiSelection} from "react-icons/bi"
import {useNavigate} from 'react-router-dom';


function HeaderSearch() {
    const navigate = useNavigate();
    const [Text, setText] = useState(null);
    const [Location, setLocation] = useState(null);
    const [Type, setType] = useState(null);

const Search = (e)=>{
    e.preventDefault();
    navigate(`/properties?key=${Text}&loc=${Location}&type=${Type}`); 
}

  return (
    <div className='search-form'>
        <Form onSubmit={Search} >
            <div className="block">
                <Form.Label><div className="ed-flex"><BsCursorText/> <span>Palavras chaves</span></div></Form.Label>
                <Form.Control placeholder='...' required onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><CiLocationOn/> <span>Localizações</span></div></Form.Label>
                <Form.Control placeholder='...' required onChange={(e)=>setLocation(e.target.value)}  />
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><BiSelection/> <span>Tipo</span></div></Form.Label>
                <Form.Select  onChange={(e)=>setType(e.target.value)} >
                     <option value="0">Para comprar</option>
                     <option value="1">Para arrendar</option>
                </Form.Select>
            </div>
            <button className="btn text-light">Pesquisar</button>
        </Form>
    </div>
  )
}

export default HeaderSearch