import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* index.html kinda */}
      <Login onLoginSuccess={() => alert('Login Successful!')} />
      <Footer />
      <Sidebar />
      <Dashboard />
    </>
  )
}

export default App
