import React, { useState } from "react";
import "./ImageApp.css";
import pic from "../Images/pi3.jpg";

function ImageApp() {
  const [width, setWidth] = useState(350);
  const [height, setHeight] = useState(200);
  const [rotation, setRotation] = useState(0);
  return (
    <div>
      <img
        src={pic}
        style={{
          width: width,
          height: height,
          transform: `rotate(${rotation}deg)`,
        }}
      />
      <div className="div2">
        <button
          className="btn"
          onClick={() => {
            setWidth(width + 10);
          }}>
          Increase Width
        </button>

        <button
          className="btn"
          onClick={() => {
            setHeight(height + 10);
          }}>
          Increase Height
        </button>

        <button
          className="btn"
          onClick={() => {
            setWidth(width - 10);
          }}>
          Decrease Width
        </button>

        <button
          className="btn"
          onClick={() => {
            setHeight(height - 10);
          }}>
          Decrease Height
        </button>

        <button
          className="btn"
          onClick={() => {
            setRotation(rotation + 10);
          }}>
          Rotate ClockWise
        </button>

        <button
          className="btn"
          onClick={() => {
            setRotation(rotation - 10);
          }}>
          Rotate AntiClockWise
        </button>
      </div>
      {/* ImageApp */}
    </div>
  );
}

export default ImageApp;
