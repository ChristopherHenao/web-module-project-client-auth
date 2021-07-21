import './App.css';
import React, { useState } from 'react'
import axios from 'axios'
import axiosWithAuth from './utils/axiosWithAuth';
import Friends from './components/Friends'
import LoginPage from './components/LoginPage'
import NavBar from './components/NavBar';



function App() {

  return (
    <div className="App">

        <NavBar/>
    
        <LoginPage/>

        <Friends />

    </div>
  );
}

export default App;
