import React from 'react'

import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

import style from '../styles/Main'
import '../styles/Main-media.css'

import Header from './Header'
import Banner from './Banner'
import RecentNews from './RecentNews'

const App = (props) => {
  const { classes } = props
  return (
    <React.Fragment><CssBaseline /><div className={classes.layout}>
      <Header classes={classes} />
      <Banner classes={classes} />
      <Grid container spacing={40} className={classes.mainGrid}>
        <RecentNews classes={classes} />
      </Grid>
    </div></React.Fragment>
  )
}

export default withStyles(style)(App)
