import React from 'react'
import Typography from '@material-ui/core/Typography'
//Mui
import Grid from '@material-ui/core/Grid'
import {makeStyles, useTheme} from '@material-ui/styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJsSquare, faNode, faReact, faPhp, faLaravel, faHtml5, faCss3, faGithub} from '@fortawesome/free-brands-svg-icons'

const styles = makeStyles((theme) => ({
	techIcons: {
		margin: "1.5rem",
		fontSize: "3rem",
	},
	techNames: { margin: "1rem" },
}));

export default function Tech(){
  const classes = styles()

  const technologies = [
		{name: 'HTML', icon: faHtml5}, {name: 'CSS', icon: faCss3},
		{name: 'JavaScript', icon: faJsSquare}, {name: 'Node', icon: faNode}, {name: 'React', icon: faReact}, {name: 'PHP', icon: faPhp},
		{name: 'Laravel', icon: faLaravel}, {name: 'GitHub', icon: faGithub}
  ]
  return(
    <Grid item container direction='column'
    justify='center' alignItems='center'>
    <Grid item>

		<Typography variant='h3'>Technologies</Typography></Grid>
    <Grid item container direction='row' alignItems='center' justify='center'>
{technologies.map((tech, index)=>{
  return (
    <Grid item style={{textAlign: 'center'}} key={index}>
      <FontAwesomeIcon
      icon={tech.icon}
      title={tech.name}
      className={classes.techIcons} />
      <p className={classes.techNames}>{tech.name}</p>
    </Grid>
  )
})}
    </Grid>
    </Grid>
  )
}
