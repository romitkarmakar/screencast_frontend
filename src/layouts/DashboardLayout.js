import React from 'react';
import NavBar from '../components/Navbar';
import '../bootstrap.css';

export default (props) => {
   return <div className="dashboard">
        <NavBar/>
        {props.children}
   </div>
}