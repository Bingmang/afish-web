import React from 'react'
import '../styles/Banner.css'
import video from '../sources/banner_video.mp4'

const Banner = () => (
    <div class="banner">
      <video loop="loop" muted="muted" autoPlay="autoplay" src={video}></video>
      <span class="videoBg"></span>
      <span class="title">aFish.ai Lab</span>
    </div>
)

export default Banner
