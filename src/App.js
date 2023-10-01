import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import BlogList from './Components/BlogList'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MainPage from './Components/MainPage'
function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
        <Route exact path='/' element={ <MainPage/>}/>
          <Route exact path='/home' element={ <Home/>}/>
          <Route exact path='/blog' element={<BlogList/>}/>
        </Routes>
      </Router>
      <Footer/>
     
     
    </div>
  )
}

export default App


