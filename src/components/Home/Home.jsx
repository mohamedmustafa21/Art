import React from "react";
import "./home.css";
import rightImg from "../assets/pexels-photo-5209730-removebg-preview.png";
function Home() {
  return (
    <div className="containerr">
      <div className="home-layer">
        <div className="parent container col-md-12">
          <div className="left-side text-white col-md-8 ">
            <div className="left-side-hero">
              <div className="herosec">
                <p>Lorem ipsum dolor sit amet Doloremque, unde!</p>
                <h1 className="suber-title mt-2 ">
                  Exploring Old <br /> Architecture
                </h1>
                <div className="btn-more mt-5">
                  <button type="button" className="btn btn-info ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side col-md-4">
            <div className="img-right-side">
              <img className="" src={rightImg} alt="" />
              <div className="icons-home ">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
