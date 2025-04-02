import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from "../pictures/logo.png";

function Header(){
 return (
    <div className="container py-3 py-md-4">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          
          <div className="logo-container d-flex justify-content-center justify-content-md-start">
            <img src={logo} alt="Faux Finds Logo" className="logo" />
          </div>
          
        </div>

        <Link to='/AboutUs' className="btn btn-outline-primary" >
              About Us
            </Link>
      </div>
      
      <hr className="my-3 my-md-4" style={{ borderColor: "#444" }} />
    </div>
  );
}

export default Header