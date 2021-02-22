import React from 'react'
//MUI
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import BannerImage from '../assets/images/bannerimage.jpeg'
import Button from '@material-ui/core/Button'

const styles = makeStyles((theme)=>({
  mainContainer: {
    height: '100vh',
    width: '100%',
    color: 'white',
    alignItems: 'center',
    margin: 0
  },
  heroBackground: {
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '90%',
    width: '100%'
  },
  contactBtn:{
    ...theme.button,
    marginLeft: '1rem'
  },
  heroBannerText: {
    marginLeft: '1rem'
  }
}))

export default function HeroBanner(){
const classes = styles()
const heroBanner = (
  <React.Fragment>
  <Grid
  className={classes.mainContainer} container alignItems='center' direction='row'>
    <Grid item className={classes.heroBackground}>
    <Typography className={classes.heroBannerText} variant='h5' align='left' style={{marginTop: '15rem', marginLeft: '1rem'}}>Hello world, my name is:
    </Typography>
      <Typography className={classes.heroBannerText} variant='h2' align='left'>Benjamin Pitts
      </Typography>
      <Typography className={classes.heroBannerText} variant='h5' align='left'>I am a full-stack software developer from Denver, CO
      </Typography><br />
      <Typography variant='h7' align='left'>
      </Typography><br /><br />
      <Button className={classes.contactBtn} href='mailto:benjaminjackpitts@gmail.com'>Email Me
      </Button>
    </Grid>
  </Grid>
  </React.Fragment>
)


  return <React.Fragment>{heroBanner}</React.Fragment>
}
