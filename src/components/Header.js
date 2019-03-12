import React from 'react'
import { Layout, Menu } from 'antd'

import logo from '../sources/logo.png'

import '../styles/Header.css'

const Header = () => (
  <Layout.Header>
    <div className="navbar">
      <Menu
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="paper">论文</Menu.Item>
        <Menu.Item key="news">新闻</Menu.Item>
        <Menu.Item key="achieve">成果</Menu.Item>
        <Menu.Item key="cooperation">合作</Menu.Item>
        <Menu.Item key="about">关于</Menu.Item>
        <Menu.Item key="zh">中</Menu.Item>
        <Menu.Item key="slice" disabled><span>|</span></Menu.Item>
        <Menu.Item key="en">En</Menu.Item>
      </Menu>
    </div>
  </Layout.Header>
)

export default Header
