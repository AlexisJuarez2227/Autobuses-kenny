import { useState } from 'react'
import Login from './pages/Login';
import UpBus from './pages/UpBus';
import Register from './pages/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
       
            <Routes>
            <Route path="/" element={<Login/>} />
                <Route  path="/Register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route  path="/UpBus" element={<UpBus/>} />
            </Routes>
        </BrowserRouter> 
  )
}

export default App
