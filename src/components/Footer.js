import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default function Footer(){
  return (
    <React.Fragment>
    <Grid style={{textAlign: 'center',
    backgroundColor: '#003366',
    color: 'white',
    height: '10vh',
    margin: '0 auto'}}
    justify='center'
    alignContent='center'
    alignItems='center'
    direction='column'
    >

    <Grid item>
    <Typography><a href='mailto:benjaminjackpitts@gmail.com'>benjaminjackpitts@gmail.com</a></Typography>
    </Grid>
    </Grid>
    </React.Fragment>
  )
}
