import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import CartDetails from './components/CartDetails';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header />
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<CartDetails />} />
    </Routes>
    

    </>
  )
}

export default App
