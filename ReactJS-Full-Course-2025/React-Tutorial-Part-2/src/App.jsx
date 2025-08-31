import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Header from './Header'
import Blog from './Pages/Blog'
import BlogDetails from './Pages/BlogDetails'
import Dashbord from './Pages/Dashbord'
import ProtectRoute from './components/ProtectRoute'

function App() {
  return(
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>} />
        <Route path='/*' element={<h1>404 Page</h1>}/>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:slug' element={<BlogDetails/>} />
        <Route path='/dashbord' element={
          <ProtectRoute>
            <Dashbord/>
          </ProtectRoute>} />
      </Routes>
    </>
  )
}

export default App
