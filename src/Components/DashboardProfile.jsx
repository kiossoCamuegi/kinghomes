import React, { useEffect, useState } from 'react'
import ImageLazyLoading from './ImageLazyLoading'
import { Avatar } from '@mui/material';
import {AiOutlinePlusCircle} from "react-icons/ai";
import {GoSignOut} from "react-icons/go";
import { Link } from 'react-router-dom';
import {SiLichess} from "react-icons/si";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ReactQuill from 'react-quill';
import Form from 'react-bootstrap/Form'; 
import ImageUploading from 'react-images-uploading';
import {BsImage} from "react-icons/bs"
import {MdOutlineDelete} from "react-icons/md";
import {AiOutlineEdit, AiOutlineEye} from "react-icons/ai";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Hoot from './Hoot';


function DashboardProfile({data}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const maxNumber = 9;
  const [DataTitle, setDataTitle] =  useState(null);
  const [DataPrice, setDataPrice] =  useState(null);
  const [DataLocation, setDataLocation] =  useState(null);
  const [DataType, setDataType] =  useState(null);
  const [DataYoutube, setDataYoutube] =  useState(""); 


  const PostData = async(e)=>{
      e.preventDefault();
     if(DataTitle !== null &&  DataPrice !== null &&  DataLocation !== null &&  DataType !== null){
          if(images.length >= 1){
            try {

              function makeid(length) {
                let result = '';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const charactersLength = characters.length;
                let counter = 0;
                while (counter < length) {
                  result += characters.charAt(Math.floor(Math.random() * charactersLength));
                  counter += 1;
                }
                return result;
            }
            
      
              console.clear()
            console.log({
              title:DataTitle,
              price:DataPrice,
              location:DataLocation,
              type:DataType,
              youtube:DataYoutube,
              images:images,
              description:JSON.stringify(value),
            })
      
      
            let code = makeid(200);
       
      
             for(let i = 0; i < images.length; i++){ 
                 const formDt  =  new FormData();
                 formDt.append("image", images[i].file); 
                 formDt.append("code", code); 
      
                 axios.post(Hoot()+"upload", formDt).then((e)=>{   
                  console.log(e) 
                }).catch((error)=>{ 
                  console.log(error)
                   toast.error("Something went wrong adding images !");
                }); 
      
      
               
                if(i === (images.length-1)){ 
                  
                  axios.post(Hoot()+"posthome", {
                    title:DataTitle,
                    price:DataPrice,
                    location:DataLocation,
                    type:DataType,
                    youtube:DataYoutube, 
                    code:code,
                    description:JSON.stringify(value)
                  }).then((e)=>{   
                    console.log(e)
                    toast.success("Information added successfuly !");
                  }).catch((error)=>{
                    console.clear()
                    console.log(error)
                     toast.error("Something went wrong !");
                  }); 
                }
             } 
      
         } catch (error) {
             console.clear()
             console.log(error)
              toast.error("Something went wrong !");
             }
          }else{
            toast.error("You need to upload images !");
          }
     }else{
      toast.error("Fill all required inputs !");
     }
  }




  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };



  return (
    <div className='dashboard-profile'> 
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Post a property</Offcanvas.Title>
           </Offcanvas.Header>
             <Offcanvas.Body>  
             <Form   encType='multipart/form-data' className='create-form'  onSubmit={PostData} > 
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control minLength={10} onChange={(e)=>setDataTitle(e.target.value)} type="text" required placeholder="Home at Mutamba" /> 
              </Form.Group>
              <Form.Group className="mb-3"  required controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control minLength={10} type="number"  onChange={(e)=>setDataPrice(e.target.value)} placeholder="ex: 120.000.000 $" required  /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" minLength={10} onChange={(e)=>setDataLocation(e.target.value)} placeholder="Angola , luanda-Mutamba" required /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Type of Business</Form.Label>
                <Form.Select type="text" minLength={10} onChange={(e)=>setDataType(e.target.value)} placeholder="Angola , luanda-Mutamba" required>
                    <option value="0">For Sale</option>
                    <option value="1">For Rent</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Youtube video</Form.Label>
                <Form.Control type="url" minLength={10} onChange={(e)=>setDataYoutube(e.target.value)} placeholder="Enter url" /> 
              </Form.Group>
              <div className="mt-2 mb-2">  
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                    <div className="images">
                    <div className='upload-box'
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <div><BsImage/></div>
                        Click or Drop here images
                      </div>
                      &nbsp;
                      <div className='btn bg-danger' onClick={onImageRemoveAll}>Remove all images</div>
                    </div>
                    <div className="image-container">
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image['data_url']} alt="" width="100" />
                          <div className="image-item__btn-wrapper d-flex">
                            <div className='bg-info' onClick={() => onImageUpdate(index)}><AiOutlineEdit/></div>
                            <div className='bg-dark text-light'  onClick={() => onImageRemove(index)}><MdOutlineDelete/></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    </div>
                  )}
                </ImageUploading>  
              </div>
              <ReactQuill theme="snow" value={value} onChange={setValue} /> 
              <button className="btn mt-4 post-btn text-light">Save and post</button>
            </Form> 
           </Offcanvas.Body>
        </Offcanvas> 
         <div className="over-box">
                <div className="wrapper">
                    <div className="content">
                    <div className="profile-data">
                   <div className="picture">
                       <Avatar sx={{width:150,height:150}} src={data.image}  />
                   </div>
                   <div className="text">
                       <h5>{data.name}</h5>
                       <strong><span className="mail">{data.email}</span></strong>
                   </div>
               </div>
                <div className="top-data">
                  <div className="wrapper">
                      <div className="content">
                      <div className="logo-area">
                        <Link to="/">
                          <div className="logo">
                            <strong><SiLichess /> <span>KingHomes</span></strong>
                          </div>
                          </Link>
                        </div>
                        <div className="buttons">
                        <div className="new">
                          <button  onClick={handleShow} className="btn text-light"><AiOutlinePlusCircle/> <span>Post something</span></button>
                        </div>
                         <Link to={Hoot()+"auth/logout"}> <button className="btn btn-logout"><GoSignOut/> <span> Signout</span></button></Link>
                        </div>
                      </div>
                       </div>
                      </div> 
                    </div>
                </div>
         </div>
     </div>
  )
}

export default DashboardProfile