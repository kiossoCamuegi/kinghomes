import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {MdOutlineDelete} from "react-icons/md";
import {AiOutlineEdit, AiOutlineEye} from "react-icons/ai";
import axios from 'axios';
import Hoot from './Hoot';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ImageLazyLoading from './ImageLazyLoading' 
import {AiOutlinePlusCircle} from "react-icons/ai";
import {GoSignOut} from "react-icons/go"; 
import {SiLichess} from "react-icons/si";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ReactQuill from 'react-quill';
import Form from 'react-bootstrap/Form'; 
import ImageUploading from 'react-images-uploading';
import {BsImage} from "react-icons/bs"   
import parse from 'html-react-parser';
import { Circles } from 'react-loader-spinner';
import GetImages from './GetImages';





function DashboardTable() {
const [Data, setData] =  useState([]);
    
const LoadData = async()=>{
  setData([]);
  try {
    let response = await axios.get(Hoot()+"userhomes");   
    setData(response.data);
  } catch (error) {
    console.log(error);
  }
}





const DeleteData = async(ID)=>{
  try {  
        axios.delete(Hoot()+"delete/"+ID).then((e)=>{    
          toast.success("Information deleted successfuly !");
          LoadData();
        }).catch((error)=>{ 
          console.log(error)
           toast.error("Something went wrong !");
        }); 
   } catch (error) { 
    console.log(error)
      toast.error("Something went wrong !");
   } 
}



const DeleteImage = async(ID, index)=>{
  try {  
        axios.delete(Hoot()+"deleteimage/"+ID).then((e)=>{    
          toast.success("Image deleted successfuly !");
          let files = Files
          files.splice(index, 1);
          setFiles(files);
          GetData(DataId)
        }).catch((error)=>{ 
          console.log(error)
           toast.error("Something went wrong !");
        }); 
   } catch (error) { 
    console.log(error)
      toast.error("Something went wrong !");
   } 
}
useEffect(()=>{
  LoadData()
},[]);



const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [value, setValue] = useState('');
const [images, setImages] = useState([]);
const [Files, setFiles] = useState([]);
const maxNumber = 9;
const [DataTitle, setDataTitle] =  useState(null);
const [DataPrice, setDataPrice] =  useState(null);
const [DataLocation, setDataLocation] =  useState(null);
const [DataType, setDataType] =  useState(null);
const [DataYoutube, setDataYoutube] =  useState(""); 
const [DataCode, setDataCode] =  useState(null); 
const [DataId, setDataId] =  useState(null); 
const  [Load, setLoaded] =  useState(false);

const onChange = (imageList, addUpdateIndex) => {
  // data for submit
  console.log(imageList, addUpdateIndex);
  setImages(imageList);
};




const GetData = async(ID)=>{
  setLoaded(false);
  setShow(true);
  try {  
    const response = await axios.get(Hoot()+"homesget/"+ID);
    if(response.data.content._id !== undefined){
      setDataTitle(response.data.content.title);
      setDataPrice(response.data.content.price);
      setDataLocation(response.data.content.location);
      setDataYoutube(response.data.content.youtube); 
      setDataType(response.data.content.type); 
      setDataCode(response.data.content.code);
      setDataId(response.data.content._id);
      setFiles(response.data.files);
      setValue((response.data.content.description)); 
      setLoaded(true);
      console.clear()
      console.log(response.data.content)
    }else{
      setLoaded(true);
    }    
   } catch (error) { 
    console.log(error)
      toast.error("Something went wrong !");
      setLoaded(true);
   }  
  }



  const updateData = async(e)=>{
    e.preventDefault();
   if(DataTitle !== null &&  DataCode !== null && DataId !== null && DataPrice !== null &&  DataLocation !== null &&  DataType !== null){
    try {  
     if(images.length <= 0){ 
        axios.patch(Hoot()+"updatehome/"+DataId, {
          title:DataTitle,
          price:DataPrice,
          location:DataLocation,
          type:DataType,
          youtube:DataYoutube,  
          description:JSON.stringify(value)
        }).then((e)=>{   
          console.log(e)
          toast.success("Information updated successfuly !");
        }).catch((error)=>{
          console.clear()
          console.log(error)
           toast.error("Something went wrong !");
        });  
     }else{
      for(let i = 0; i < images.length; i++){ 
        const formDt  =  new FormData();
        formDt.append("image", images[i].file); 
        formDt.append("code", DataCode); 

        axios.post(Hoot()+"upload", formDt).then((e)=>{   
         console.log(e) 
       }).catch((error)=>{ 
         console.log(error)
          toast.error("Something went wrong adding images !");
       }); 

       if(i === (images.length-1)){ 
         axios.patch(Hoot()+"updatehome/"+DataId, {
           title:DataTitle,
           price:DataPrice,
           location:DataLocation,
           type:DataType,
           youtube:DataYoutube,  
           description:JSON.stringify(value)
         }).then((e)=>{   
           console.log(e)
           toast.success("Information updated successfuly !");
         }).catch((error)=>{
           console.clear()
           console.log(error)
            toast.error("Something went wrong !");
         }); 
       }
      } 
     }

 } catch (error) {
     console.clear()
     console.log(error)
      toast.error("Something went wrong !");
     }
   }else{
    toast.error("Fill all required inputs !");
    console.clear()
    console.log({
      title:DataTitle,
      price:DataPrice,
      location:DataLocation,
      type:DataType,
      youtube:DataYoutube,  
      code:DataCode,
      id:DataId,
      description:JSON.stringify(value)
    });
   }
}




  return (
    <div>
      <div className="wrapper">
        <br /><br />
        <br /><br />
           
         <div className="dash-table">
         <button onClick={LoadData} className="btn bg-primary text-light">Refresh data</button>
          <br /><br />
         <Table striped>
        <thead>
         <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Price</th>
            <th>Location</th>
            <th>Visitors</th>
            <th>Type</th>
             <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item,index)=>{
              return(
                <tr key={index+1}>
                <td> {index+1} </td> 
                <td>
                    <div className="d-flex">   
                        <div className="ml-2">{item.title} </div>
                     </div> 
                  </td> 
                <td>$ {item.price}</td> 
                <td>{item.location}</td> 
                <td>{item.visitors}</td> 
                <td>{item.type*1  === 0 ? "For Sale" : "For Rent"}</td> 
                <td>
                   <button onClick={()=>DeleteData(item._id)} className="btn bg-danger"><MdOutlineDelete /></button>
                   <button onClick={()=>GetData(item._id)} className="btn ml-2 bg-info"><AiOutlineEdit/></button>
                   <Link to={`/property_details/`+item._id}><button className="btn ml-2 bg-primary"><AiOutlineEye/></button></Link>
                </td>  
               </tr> 
              )
          })}
          </tbody>
        </Table>
         </div>
      </div>
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit property data</Offcanvas.Title>
           </Offcanvas.Header>
             <Offcanvas.Body>  
                  {Load === true ? 
                  <>
                      {DataTitle !== null  ?
                      <Form onSubmit={updateData}  encType='multipart/form-data' className='create-form' > 
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control minLength={10} onChange={(e)=>setDataTitle(e.target.value)} value={DataTitle} type="text" required placeholder="Home at Mutamba" /> 
                      </Form.Group>
                      <Form.Group className="mb-3"  required controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control minLength={10} type="number"  value={DataPrice} onChange={(e)=>setDataPrice(e.target.value)} placeholder="ex: 120.000.000 $" required  /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" minLength={10}  value={DataLocation} onChange={(e)=>setDataLocation(e.target.value)} placeholder="Angola , luanda-Mutamba" required /> 
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type of Business</Form.Label>
                        <Form.Select type="text" minLength={10}  value={DataType} onChange={(e)=>setDataType(e.target.value)} placeholder="Angola , luanda-Mutamba" required>
                            <option value="0">For Sale</option>
                            <option value="1">For Rent</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Youtube video</Form.Label>
                        <Form.Control type="url" minLength={10}  value={DataYoutube} onChange={(e)=>setDataYoutube(e.target.value)} placeholder="Enter url" /> 
                      </Form.Group>
                      <div className="mt-2 mb-2">
                        {Files.map((item, index)=>{
                            return(
                              <div className="image-box mt-4" key={index+1}>
                                <ImageLazyLoading source={GetImages(item.name)} height={100} />
                                 <div className="bg-dark btn col mt-2" onClick={()=>DeleteImage(item._id, index)} >Delete image</div>
                              </div>
                            )
                        })} 
                      </div>
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
                      <button className="btn mt-4 post-btn text-light">Update and post</button>
                       </Form> 
                      : <>
                        <div className="loading-area">
                            <h1 className='text-danger'> Error loading <br />data</h1>
                        </div>
                      </> 
                      }
                  </>:
                  <>
                    <div className="loading-area">
                      <Circles   height="140"  width="140"  color="#9A3B3B"  ariaLabel="circles-loading"
                       wrapperStyle={{}}  wrapperClass=""  visible={true}
                      />
                      </div>
                  </> } 
           </Offcanvas.Body>
        </Offcanvas> 
    </div>
  )
}

export default DashboardTable