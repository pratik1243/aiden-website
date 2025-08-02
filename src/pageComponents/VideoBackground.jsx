import React from "react";

const VideoBackground = () => {
  return (
    <div className="banner-sec">
      <div className="banner-text-sec">
        <h3>Fast, Reliable, Scalable <span className="red-text">Delivery Solutions</span></h3>
        <p>Seamless integration and real-time tracking for businesses.</p>
        <button>Get Started</button>
      </div>
      <video autoPlay muted loop preload="auto" className="banner-video-sec">
        <source
          src={"https://videos.pexels.com/video-files/4169344/4169344-uhd_3840_2160_25fps.mp4"}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;
