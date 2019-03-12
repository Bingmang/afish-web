import React from 'react'
import '../styles/Banner.css'
import video from '../sources/banner_video.mp4'

const Banner = () => (
    <div className="banner">
      <video loop="loop" muted="muted" autoPlay="autoplay" src={video}></video>
      <span className="videoBg"></span>
      <span className="title">aFish.ai Lab</span>
    </div>
)

export default Banner
