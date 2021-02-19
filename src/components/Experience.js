import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {HashLink as Link} from 'react-router-hash-link'
import Grid from '@material-ui/core/Grid'

export default function Experience() {
	return (
		<React.Fragment>
    <div style={{ textAlign: 'center'}}><br /><br />
		<Grid item container direction='column' alignItems='center' justify='center'>
			<Typography variant="h3">Project links:</Typography><br />
			<Link onClick={()=> window.open('https://triplejpainting.herokuapp.com/', "_blank")} style={{textDecoration: 'none', color: '#4EC274', fontSize: '30px', margin: '0 2rem'}}>Triple J Painting Company</Link>
			<Link onClick={()=> window.open('https://recordstore666.herokuapp.com/recordstore', "_blank")} style={{textDecoration: 'none', color: '#4EC274', fontSize: '30px', margin: '0 2rem'}} >Counter Culture Records</Link>
			<Link onClick={()=> window.open('https://quiz-js-pernstack.herokuapp.com/', "_blank")} style={{textDecoration: 'none', color: '#4EC274', fontSize: '30px', margin: '0 2rem'}} >Quiz.js</Link>
			<Link onClick={()=> window.open('https://benjaminpitts.github.io/thejokestore/', "_blank")} style={{textDecoration: 'none', color: '#4EC274', fontSize: '30px', margin: '0 2rem'}} >The Joke Store</Link>
			</Grid>

		<br /><br />
      </div>
		</React.Fragment>
	);
}
