import React from 'react'
import '../styles/Footer.css'
import logo from '../sources/logo.png'
import github from '../sources/github.png'

const Footer = () => (
  <div className="footer">
    <div className="footer-box">
      <div className="left">
        <img src={logo} alt="logo"></img>
      </div>
      <p>Copyright © 1998-2019 aFish.ai. All Rights Reserved.</p>
      <ul className="right">
        <li><a href="https://github.com/afish1001" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"></img></a></li>
      </ul>
    </div>
  </div>
)

export default Footer
