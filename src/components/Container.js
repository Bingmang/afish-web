import React from 'react'
import { Carousel } from 'antd'
import '../styles/Container.css'

import '../styles/Markdown.css'
import MainPosts from './MainPosts';

const Title = (props) => (
  <div className="index-title inner">
    <h3>{props.title}</h3>
  </div>
)


export default () => (
  <div className="container">
    <div className="col-news">
      <Title title="最新动态" />
      <div className="index-content inner">
        <Carousel>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <MainPosts />
      </div>
    </div>
  </div>
)
