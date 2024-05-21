import { useState } from 'react'
import './App.css'
import { Cuerpo } from './componentes/cuerpo'
import AlignmentExample from './componentes/navbar_boostrap';
import ResponsiveBreakpointsExample from './componentes/table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icons from './componentes/icons';

const element = <h1>Hello, world</h1>

function App() {

  return (
    <>
    <ResponsiveBreakpointsExample></ResponsiveBreakpointsExample>
    <Icons></Icons>
    </>
  )
}

export default App
