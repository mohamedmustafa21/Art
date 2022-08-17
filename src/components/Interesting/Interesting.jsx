import React from "react";
import "./interst.css";
import inter1 from "../assets/inter1-photo-2167395.jpg";
import inter2 from "../assets/inter2photo-3893023.jpeg";

function Interesting() {
  return (
    <section className="section4">
      <div className="container container-sec3 text-white ">
        <div className="small-contain">
          <div className="side1">
            <h3 className="title-sec3 mb-5 mt-5">Interesting</h3>
            <img className="w-75" src={inter1} alt="" />
            <p className="mt-3 text-muted">Lorem ipsum, dolor sit amet </p>
            <h4 className="title-img">Big Idias Small Things</h4>
            <p className="mt-3 text-center">
              Lorem ipsum dolor sit amet consectetur. <br />
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="side2">
            <img className="w-75" src={inter2} alt="" />
            <p className="mt-3 text-muted">Lorem ipsum, dolor sit amet </p>
            <h4 className="title-img">Big Idias Small Things</h4>
            <p className="mt-3 text-center">
              Lorem ipsum dolor sit amet consectetur. <br />
              Lorem ipsum dolor sit amet.
            </p>

            <button className="button-inter btn btn-info">All Posts</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interesting;
