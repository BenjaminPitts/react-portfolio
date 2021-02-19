import {createMuiTheme} from '@material-ui/core/styles'


const myBlue = '#003366'
const myGreen = '#4EC274'

export default createMuiTheme({
  palette: {
    common: {blue: `${myBlue}`, green: `${myGreen}`},
    primary: { main: `${myBlue}`},
    secondary: { main: `${myGreen}`}
  },
  typography:{
    p: {},
    h1: {},
    h2: {},
    h3: { color: myBlue },
    h4: { color: myGreen, fontSize: '30px', textDecoration: 'none' },
    h5: {color: 'white', fontSize: '20px'}
  },
  button: {
    marginLeft: '2.5rem',
    backgroundColor: myGreen,
    color: 'white',
    borderRadius: '10px',
    height: '30px',
    padding: '20px',
    fontSize: '1rem'
  }
})
