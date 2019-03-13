import React from 'react'
import Markdown from 'react-markdown'
import { Grid, Typography, Divider } from '@material-ui/core'

import axios from 'axios'

import post1 from '../sources/posts/blog-post.1.md';
import post2 from '../sources/posts/blog-post.2.md';
import post3 from '../sources/posts/blog-post.3.md';

const posts = [post1, post2, post3]

class RecentNews extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  async componentDidMount() {
    let datas = []
    for (let post of posts) {
      try {
        let response = await axios.get(post)
        datas.push(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    this.setState({
      posts: datas
    })
  }

  render() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            最新动态
          </Typography>
          <Divider />
          {this.state.posts.map(post => (
            <Markdown source={post} key={post.substring(0, 40)}/>
          ))}
        </Grid>
      </React.Fragment>
    )
  }
}

export default RecentNews
