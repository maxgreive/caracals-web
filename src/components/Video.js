import React from "react";
import introVideo from "../assets/intro-short-2.mp4"

const playIconStyles = {
  borderWidth: "22px 0 22px 34px",
  marginTop: "-22px",
  marginLeft: "-11px",
}

export default function Video() {
  return (
    <div className="relative py-40" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
      <div className="relative">
        <div className="absolute block top-0 right-0 bottom-0 left-0" id="contentIframeYT"></div>
        <video className="w-full max-w-7xl mx-auto" autoPlay playsInline muted="muted" loop="loop" poster="" preload="none" data-src="https://www.youtube.com/watch?v=Vz5IZuKQTrE">
          <source src={introVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute w-24 h-24 left-1/2 top-1/2 -mt-12 -ml-12 playProgress animatePlay">
        <div className="absolute bg-black opacity-50 h-24 w-24 rounded-full transition-all cursor-pointer">
          <div className="circle">
            <div className="mask full">
              <div className="fill"></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 border-t-transparent border-r-transparent border-b-transparent border-l-white cursor-pointer" style={playIconStyles}></div>
      </div>
    </div>
  )
}