export default theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1500 + theme.spacing.unit * 3 * 2)]: {
      width: 1500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'flex-end',
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  navButton: {
    margin: theme.spacing.unit,
    '&:hover': {
      color: 'blue',
    },
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  banner: {
    backgroundColor: 'rgba(1, 50, 150, 0.5)',
    zIndex: 2,
    margin: `0 0 ${theme.spacing.unit * 6}px 0`,
  },
  bannerVideo: {
    width: '100%',
    objectFit: 'contain',
    justifyContent: 'center',
  },
  bannerTitle: {
    display: 'inline-block',
    position: 'absolute',
    height: 'auto',
    top: '45%',
    left: '50%',
    width: '840px',
    textAlign: 'center',
    fontSize: '80px',
    color: '#fff',
    fontFamily: 'Typesketchbook, Arial',
    textShadow: '0 0 9px #fff',
    zIndex: 4,
    transform: 'translate(-50%, -50%)',
  }
})
