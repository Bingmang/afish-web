import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <div class="inner">
          <div class="lang">
            <a href="#">中</a>
            <span>|</span>
            <a href="#">En</a>
          </div>
          <div class="navbar">
            <ul style={{height: '100%'}}>
              <li>
                <span>论文</span>
              </li>
              <li>
                <span>新闻</span>
              </li>
              <li>
                <span>成果</span>
              </li>
              <li>
                <span>合作</span>
              </li>
              <li>
                <span>关于</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
