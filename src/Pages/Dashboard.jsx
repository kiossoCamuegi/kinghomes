import React, { useEffect, useState } from 'react'
import DashboardProfile from './Components/DashboardProfile';
import DashboardTable from './Components/DashboardTable';
import Hoot from './Components/Hoot';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



function Dashboard() { 
  const navigate = useNavigate();
  

  const [Data, setData] = useState(null)
 const CheckUserStatus = async()=>{
      try {
        const response =  await axios.get(Hoot()+"checkuserstatus");   
        setData((response.data.userid === null || response.data.userid  === undefined) ? null : response.data);
        if(response.data.userid === null || response.data.userid  === undefined ){ navigate('/signin')}else{  document.title = "Dahboard - "+response.data.name;}
      } catch (error) { 
        console.log(error)
        setData(null);
        return navigate('/signin');
      }
 }

  useEffect(()=>{
    CheckUserStatus();
  },[]); 

  return (
    <>
     {Data !== null ?
     <div className='fd-dashboard'>
        <DashboardProfile data={Data}  />
        <DashboardTable data={Data} />
    </div> 
     : <></>
    }
    </>
  )
}

export default Dashboard