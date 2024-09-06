import React from 'react'
import Header from './Components/Head/Header'
import './App.css'
import Home from './Components/Hero/Home'
import Features from './Components/Features/Features'
import Portfolio from './Components/Portfolio2/Portfolio'
import Resume from './Components/Resume/Reseme'
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Features/>
      <Portfolio/>
      <Resume/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App