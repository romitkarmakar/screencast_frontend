import React from 'react';
import Navbar from '../components/Navbar';
import '../bootstrap.css';

export default (props) => {
   return <div>
        <Navbar/>
        {props.children}
   </div>
}