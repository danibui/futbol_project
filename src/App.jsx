import { useState } from 'react'
import './App.css'
import { Cuerpo } from './componentes/cuerpo'
import  NavBar from './componentes/navbar_boostrap';
import ResponsiveBreakpointsExample from './componentes/table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icons from './componentes/icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const element = <h1>Hello, world</h1>

function App() {

  return (
    <>
    <NavBar></NavBar>
    <ResponsiveBreakpointsExample></ResponsiveBreakpointsExample>
    <Icons></Icons>
    </>
  )
}

export default App
