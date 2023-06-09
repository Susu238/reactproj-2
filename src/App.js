import React from 'react';
import Home from './pages/Home'
import Navbar from './Components/Navbar';
import Footer from"./pages/Footer";
import Menu from './pages/Menu';
import About from './pages/About'
import Contact from './pages/Contact'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import './App.css';

function App (){

  return(

    <Router>
    <Navbar   />
    
     <Routes>
     
     <Route path='/' exact element={<Home/>} />
     
      <Route path='/Menu' exact element={<Menu/>} />
      <Route path='/About' exact element={<About/>} />
      <Route path='/Contact' exact element={<Contact/>} />
      
      


      </Routes>
      <Footer  />
    </Router>
    

  )
    

  
}

export default App;