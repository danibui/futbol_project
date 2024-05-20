import { useState } from 'react'
import './App.css'
import { Cuerpo } from './componentes/cuerpo'
import AlignmentExample from './componentes/navbar_boostrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const element = <h1>Hello, world</h1>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AlignmentExample></AlignmentExample>
    <Cuerpo></Cuerpo>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {element}
    </>
  )
}

export default App
