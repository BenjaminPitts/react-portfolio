import React from 'react'
//MUI
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import BannerImage from '../assets/images/bannerimage.jpg'
import Button from '@material-ui/core/Button'

const styles = makeStyles((theme)=>({
  mainContainer: {
    height: '100vh',
    color: 'white',
    margin: 0
  },
  heroBackground: {
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
  },
  contactBtn:{
    ...theme.button,
    marginLeft: '5rem'
  },
  heroBannerText: {
    marginLeft: '5rem'
  }
}))

export default function HeroBanner(){
const classes = styles()
const heroBanner = (
  <React.Fragment>
  <Grid
  className={classes.mainContainer} container alignItems='center' direction='row'>
    <Grid item className={classes.heroBackground}>
    <Typography className={classes.heroBannerText} variant='h5' align='left' style={{marginTop: '1rem', marginLeft: '5rem'}}>Hello world, my name is:
    </Typography>
      <Typography className={classes.heroBannerText} variant='h1' align='left'>Ben Pitts
      </Typography>
      <Typography className={classes.heroBannerText} variant='h5' align='left'>I am a software developer from Denver, CO
      </Typography><br />
      <Typography variant='h7' align='left'>
      </Typography><br /><br />
      <Button className={classes.contactBtn} href='mailto:benjaminjackpitts@gmail.com'>Email Me Here
      </Button>
    </Grid>
  </Grid>
  </React.Fragment>
)


  return <React.Fragment>{heroBanner}</React.Fragment>
}