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
    h3: { color: myBlue }
  },
  button: {
    marginLeft: '2.5rem',
    backgroundColor: myGreen,
    color: 'white',
    borderRadius: '15px',
    height: '30px',
    padding: '15px',
    fontSize: '1rem'
  }
})
