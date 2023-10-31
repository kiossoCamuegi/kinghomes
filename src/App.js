import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Houses from './Pages/Houses';
import DetailsPage from './Pages/DetailsPage';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Contacts from './Pages/Contacts';
import Dashboard from './Pages/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'; 
import { Circles } from 'react-loader-spinner';
import About from './Pages/About';


function App() {
  const  [Load, setLoaded] =  useState(false);

  useEffect(()=>{
     setTimeout(() => {
      setLoaded(true)
     }, 2000);
  },[]); 


  return ( 
    <> 
      {Load === true ?
      <div>
          <ToastContainer />
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Houses />} />
          <Route path="/property_details/:ID" element={<DetailsPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      </div>
      : 
       <>
         <div className='loader'>
         <Circles
            height="140"
            width="140"
            color="#9A3B3B"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
         </div>
       </> 
      }
    </> 
  );
}

export default App;
