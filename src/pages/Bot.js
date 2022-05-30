/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";

const Camera = () => {
  const videoRef = useRef(null);
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <body>
      <Navbar />
      <h1 className="title2 text-center">Camera</h1>
      <div className="camera mt-16">
        <div className="bord">
          <video ref={videoRef}></video>
        </div>
      </div>
    </body>
  );
};

export default Camera;
