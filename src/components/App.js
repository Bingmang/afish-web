import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

import Header from './Header'
import Banner from './Banner'
import Container from './Container'
import Footer from './Footer'

import style from '../styles/App.js'
import '../styles/App.css';

const App = (props) => {
  const { classes } = props
  return (
    <div className="mainWrapper"><CssBaseline />
      <Header />
      <Banner />
      <div className={classes.layout}>
        <Container />
      </div>
      <Footer />
    </div>
  )
}

export default withStyles(style)(App)
