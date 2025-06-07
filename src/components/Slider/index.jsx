import React from "react";
import "./Slider.css";
import {
  slider_1,
  slider_2,
  slider_3,
  slider_4,
  slider_5,
  slider_6,
  slider_7,
  slider_8,
  slider_9,
  slider_10,
} from "../../assets";

const Slider = () => {
  return (
    <div className="slider">
      <h1 className="sub_title">
        Products that we <span className="g-text">use</span>
      </h1>
      <div className="list">
        <div className="item" style={{ "--position": 1 }}>
          <img src={slider_1} alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={slider_2} alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={slider_3} alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={slider_4} alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={slider_5} alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src={slider_6} alt="" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src={slider_7} alt="" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src={slider_8} alt="" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src={slider_9} alt="" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src={slider_10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
