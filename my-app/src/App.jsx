import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import Navbar from './components/Navbar'
// import Banner from './components/Banner'
// import Footer from './components/Footer'
// import Body from './components/Body'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Profilepage from './pages/Profilepage';
import NewPostpage from './pages/NewPostpage';
import Postpage from './pages/Postpage';
import { Navbar, Banner, Body, Footer, Signup } from "./components"
import { AuthProvider } from './context/AuthContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/login' element={<Loginpage />}></Route>
        <Route path='/create' element={<Signuppage />}></Route>
        <Route path='/profile' element={<Profilepage />}></Route>
        <Route path='/newpost' element={<NewPostpage />}></Route>
        <Route path='/posts/:id' element={<Postpage />}></Route>
      </Routes>
      </AuthProvider>
  )
};

export default App;
