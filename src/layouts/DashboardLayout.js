import React from 'react';
import NavBar from '../components/Navbar';
import '../bootstrap.css';
import Footer from '../components/Footer';
import '../styles/background.css';

export default (props) => {
   return <div className="dashboard">
      <NavBar />
      {props.children}
      <Footer />
      <div className="area">
         <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
         </ul>
      </div>
   </div>
}