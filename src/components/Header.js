import React, { Component } from 'react'
import { Menu } from 'antd'

import '../styles/Header.css'
import logo from '../sources/logo.png'

class Header extends Component {
  state = {
    current: null
  }

  handleClick = (e) => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  render() {
    return (
      <header className="header">
        <div className="inner">
          <a href="/"><img src={logo} alt="logo"></img></a>
          <div className="lang">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="zh">中</Menu.Item>
              <Menu.Item key="slice" disabled><span>|</span></Menu.Item>
              <Menu.Item key="en">En</Menu.Item>
            </Menu>
          </div>
          <div className="navbar">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="paper">论文</Menu.Item>
              <Menu.Item key="news">新闻</Menu.Item>
              <Menu.Item key="achieve">成果</Menu.Item>
              <Menu.Item key="cooperation">合作</Menu.Item>
              <Menu.Item key="about">关于</Menu.Item>
            </Menu>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
