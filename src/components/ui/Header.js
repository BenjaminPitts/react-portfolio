import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
//Material UI
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Logo from '../../assets/images/logo.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import {faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const styles = makeStyles((theme)=>({
  toolBarMargin: {
  ...theme.mixins.toolbar,
  marginBottom: '2em',
},
logo: {
  marginLeft: '2rem',
  width: '6rem'
},
tabContainer: {
  marginLeft: 'auto',
  [theme.breakpoints.down('xs')]: {
    marginRight: '10rem'
  },
  navIcons: {
    fontSize: '4rem'
  }
}
}))

export default function Header(){
  const classes = styles()
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

const routes = [
{ name: 'About', link: '#about' },
{ name: 'Contact', link: '#contact' },
{ name: 'Experience', link: '#experience'}
]

const tabs = (
		<React.Fragment>
			<div className={classes.tabContainer}>
				{routes.map((route, id) => {
          return(
            <Link to={route.link} style={{ textDecoration: 'none', color: 'white'}}>
            <Tab value={route.id} label={route.name} key={`${route}.${id}`} >
              {route.name}
            </Tab>
            </Link>
          )
				})}
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
        {matchesXS ? icons : tabs}
        </ToolBar>
      </AppBar>
      <div className={classes.toolBarMargin}></div>
    </React.Fragment>
  )
}
