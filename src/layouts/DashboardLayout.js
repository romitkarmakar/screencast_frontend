import React from 'react';
import NavBar from '../components/Navbar';
import '../bootstrap.css';

export default (props) => {
   return <div>
        <NavBar/>
        {props.children}
   </div>
}