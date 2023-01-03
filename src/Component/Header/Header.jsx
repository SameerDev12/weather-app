import React,{useRef} from 'react';
import './Header.css';

const Header = () => {
const searchCity=useRef(null);
  return (
    <div className='h-search-container'>
        <input className='h-search' type="text" placeholder='Search the Cities' ref={searchCity}/>
    </div>
  )
}

export default Header