import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
//Material UI
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Logo from '../../assets/images/bannerimage.jpeg'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import {faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const styles = makeStyles((theme)=>({
  toolBarMargin: {
  ...theme.mixins.toolbar,
  marginBottom: '2em',

},
logo: {
  marginLeft: '0',
  width: '4rem',
  opacity: '.8',
  border: '5px solid white'
},
tabContainer: {
  marginLeft: 'auto',
  justify: 'center',
  textDecoration: 'none',
  [theme.breakpoints.down('xs')]: {
    marginRight: '0',
    color: 'white',
    fontSize: '10px',

  },
  navIcons: {
    fontSize: '30px',
    width: '4rem'
  }
}
}))

export default function Header(){
  const classes = styles()
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

const routes = [
{ name: 'About', link: '#about' },
{ name: 'Contact', link: '#contact'},
{ name: 'Experience', link: '#experience'}
]

const tabs = (
		<React.Fragment>
			<div className={classes.tabContainer}>
			<Link onClick={()=> window.open('https://www.linkedin.com/in/benjaminjackpitts/', "_blank")} style={{textDecoration: 'none', color: 'white', fontSize: '18px', margin: '0 .5rem'}} >LinkedIn</Link>
      <Link onClick={()=> window.open('https://github.com/BenjaminPitts', "_blank")} style={{textDecoration: 'none', color: 'white', fontSize: '18px', margin: '0 .5rem'}} >GitHub</Link>
      <Link onClick={()=> window.open('https://benjaminjackpitts.wordpress.com/', "_blank")} style={{textDecoration: 'none', color: 'white', fontSize: '18px', margin: '0 .5rem'}} >Wordpress</Link>
			</div>
		</React.Fragment>
	);

const icons = (
  <React.Fragment>
  <div className={classes.tabContainer}>
<Link to='#about'>
  <FontAwesomeIcon icon={faQuestionCircle}
  title="About Me"
  className={classes.navIcons} alt={'About Me'} />
</Link>
  </div>
</React.Fragment>
)

  return (
    <React.Fragment>
      <AppBar position='fixed' color='primary'>
        <ToolBar disableGutters>
        <Button disableRipple>
        <img src={Logo} className={classes.logo} alt={'logo'} />
        </Button>
        {matchesXS ? tabs : tabs}
        </ToolBar>
      </AppBar>
      <div className={classes.toolBarMargin}></div>
    </React.Fragment>
  )
}
