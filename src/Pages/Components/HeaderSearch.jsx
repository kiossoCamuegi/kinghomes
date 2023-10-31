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
                <Form.Label><div className="ed-flex"><BsCursorText/> <span>Keywords</span></div></Form.Label>
                <Form.Control placeholder='...' required onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><CiLocationOn/> <span>Location</span></div></Form.Label>
                <Form.Control placeholder='...' required onChange={(e)=>setLocation(e.target.value)}  />
            </div>
            <div className="block">
                <Form.Label><div className="ed-flex"><BiSelection/> <span>Type</span></div></Form.Label>
                <Form.Select  onChange={(e)=>setType(e.target.value)} >
                     <option value="0">For sale</option>
                     <option value="1">For rent</option>
                </Form.Select>
            </div>
            <button className="btn text-light">Search</button>
        </Form>
    </div>
  )
}

export default HeaderSearch