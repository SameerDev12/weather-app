// import React,{useEffect,useState,useRef}from 'react'

// const App = () => {
// const [imgSrc,setImgSrc]=useState("");
// const searchCity=useRef(null);
// let [triger,setTrigeer]=useState(false);



// useEffect(()=>{  
//   let city="";

//   const Fetcher=async ()=>{
//     try
//     {
//       if(searchCity.current.value!=="")
//       {
//         city=searchCity.current.value;
//       }
      
//       const Raw=await fetch(`https://api.weatherapi.com/v1/current.json?key=d9d0c30f83504a5fb42171629223012&q=${city}&aqi=yes`);
//       const Data=await Raw.json();
//       console.log(Data);
//       setImgSrc(Data["current"]["condition"]["icon"])
//     }
//     catch(error)
//     {
//       console.log(error);
//     }
//   }

//   navigator.geolocation.getCurrentPosition((position)=>{
//     city=`${position.coords.latitude},${position.coords.longitude}`;
//     console.log(city);
//     if(city!=="")
//     {
//        Fetcher();
//     }
//   });


// },[triger]);


//   return (
//     <div>
//       <div>
//         <input type="text" name='fullname' ref={searchCity} />
//         <button onClick={()=>{
//           console.log(searchCity.current.value);
//           setTrigeer(!triger);
//         }}>Search</button>
//       </div>
//       {imgSrc!==""?<img src={imgSrc} className={"img-fluid rounded-top"} alt="Img"/>:null}
//     </div>
//   )
// }

// export default App

import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Sidebar from './Component/Sidebar/Sidebar';
import Header from './Component/Header/Header';
import Weather from './Pages/Weather/Weather';
import Cities from './Pages/Cities/Cities';
import Map from './Pages/Map/Map';
import './App.css';


const App = () => {
  return (
    <div className='o-body'>
      <Sidebar/>
      <div className='o-container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Weather/>}></Route>
          <Route path='/cities' element={<Cities/>}></Route>
          <Route path='/map' element={<Map/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App


