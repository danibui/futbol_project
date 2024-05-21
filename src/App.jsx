import { useState } from 'react'
import './App.css'
import { Cuerpo } from './componentes/cuerpo'
import AlignmentExample from './componentes/navbar_boostrap';
import ResponsiveBreakpointsExample from './componentes/table';
import 'bootstrap/dist/css/bootstrap.min.css';


const element = <h1>Hello, world</h1>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ResponsiveBreakpointsExample></ResponsiveBreakpointsExample>
    </>
  )
}

export default App
