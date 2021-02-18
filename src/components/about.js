import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Avatar from './../assets/images/avatar.jpg'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const styles = makeStyles((theme)=>({
  aboutMeBody: {
    ...theme.typography.h3,
    [theme.breakpoints.down('md')]: {
      maxWidth: 'auto'
    }
  },
  avatar: {
    borderRadius: '50%',
    maxWidth: '20rem',
    [theme.breakpoints.up('md')]: {
      marginRight: '1rem'
    }
  }
}))

export default function About(){
  const classes = styles()
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <React.Fragment>
      <Grid
      id='about'
      container
      justify='space-around'
      alignItems='center'
      direction='row'
      >
        <Grid item>
        <Typography align={matchesXS ? 'center' : 'left'} variant='h2' className={classes.aboutMeBody}>About Me</Typography>
        <Typography variant='h6' align={matchesSM ? 'center' : 'left'}>I’ve worked for companies ranging from small/independent, medium/franchise, to large corporations and can adapt to any type of working environment. I have a well rounded knowledge of frontend languages/backend frameworks and have deployed an [array] of projects to showcase this fluency. I have also collaborated with other software developers on projects and have the ability to learn new languages and concepts.
  <br /><br />
  I have over 8 years of experience in restaurant management. I have successfully launched menus, organized charitable community events and piloted merchandising, marketing and training initiatives. During my tenure in that industry, I was able to continuously grow quarterly sales while keeping team morale at an all time high. My previous supervisor described me as a “dedicated leader that sets a great example with his positive approach to problem solving”. I love overcoming challenges and using my communication skills to maintain a fun, creative, and productive work environment .
  </Typography>
        </Grid>

        

      </Grid>
    </React.Fragment>
  )
}
