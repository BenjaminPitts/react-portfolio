import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default function Footer(){
  return (
    <React.Fragment>
    <Grid style={{textAlign: 'center',
    backgroundColor: 'blue',
    color: 'white',
    height: '10vh',
    margin: '0 auto'}}
    justify='center'
    alignContent='center'
    alignItems='center'
    direction='column'>
    
    <Grid item>
    <Typography>benjaminjackpitts@gmail.com</Typography>
    </Grid>
    </Grid>
    </React.Fragment>
  )
}
