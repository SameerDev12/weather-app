import React, { useState} from 'react';
import CloudIcon from '@mui/icons-material/Cloud';
import ViewListIcon from '@mui/icons-material/ViewList';
import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Weather from '../../Pages/Weather/Weather';

const sideNavbar=[
    {
      id:1,
      icon:<CloudIcon/>,
      name:"Weather",
      url:'/'
    },
    {
      id:2,
      icon:<ViewListIcon/>,
      name:"Cities",
      url:'/cities'
    },
    {
        id:3,
        icon:<MapIcon/>,
        name:"Map",
        url:'/map'
    }
];

//Sidebar Component of the app.
const Sidebar = () => {
const [selected,setSelected]=useState({
  Weather:true,
  Cities:false,
  Map:false  
});


const handleNavbar=(name)=>{
  const Data={
    Weather:true,
    Cities:false,
    Map:false
  };

  for(let key in selected)
  {
    if(key===name)
    {
      Data[key]=true;
    }
    else 
    {
      Data[key]=false;
    }
  }
  
  setSelected({...Data});
}

  return (
    <div className='s-sidebar-container'>

        <div className='s-img-container'>
          <img className='s-logo-img' src={"https://assets.api.uizard.io/api/cdn/stream/2baed850-2dc2-47fb-9a06-6a454703a56d.png"} alt="logo"/>
        </div>

        <div className='s-nav-container flex-column'>
          {
           sideNavbar.map((data)=>(
             <div key={data.id}>
              <Link to={data.url} onClick={()=>{handleNavbar(data.name)}} className={`s-icon ${selected[data.name]&&"selected"} flex-column-center`}>
                <span>{data.icon}</span>
                <span>{data.name}</span>
              </Link>
             </div>
          ))}
        </div>
    </div>
  )
}

export default Sidebar