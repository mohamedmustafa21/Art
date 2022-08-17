import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="container navbar-container">
      <nav className="navbar navbar-expand-lg   ">
  <a className="navbar-brand text-white" href="#"><i class="fa-solid fa-a"></i> r t </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link active " href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link active " href="#">exploration <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link active " href="#">Events <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link active " href="#">Shop</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link  active " href="#">Contact Us</a>
      </li>
    </ul>
  
  </div>
</nav>
    </div>
  );
}

export default Navbar;
