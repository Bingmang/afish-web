import React from 'react'

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Typography } from '@material-ui/core';

import logo from '../sources/logo.png'

const sections = [
  '论文',
  '新闻',
  '成果',
  '合作',
  '关于',
]

export default (props) => {
  const { classes } = props

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbarMain}>
        <a href="/"><img src={logo} alt="logo" /></a>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          aFish.ai
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Login
        </Button>
      </Toolbar>
      <Toolbar id = "navbar" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Button className={classes.navButton} key={section}>
            {section}
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  )

}
