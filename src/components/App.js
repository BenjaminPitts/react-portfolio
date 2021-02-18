import React from "react"
import {BrowserRouter} from 'react-router-dom'
import Header from './ui/Header'
import Theme from './ui/Theme'
import {ThemeProvider} from '@material-ui/styles'
import HeroBanner from './HeroBanner'
import About from './about'
import Tech from './Tech'
import Experience from './Experience'
import Footer from './Footer'

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <BrowserRouter>
    <Header />
    <HeroBanner />
    <About /><br /><br /><br />
    <Tech /><br /><br /><br />
    <Experience /><br /><br /><br />
    <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
