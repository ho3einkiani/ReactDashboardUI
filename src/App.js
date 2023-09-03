//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import SignIn from './views/auth/signIn/index';
import Home from './views/index';
import Admin from './views/admin/index'
import Navbar from './views/navbar';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  render() { 
    return (
      <>
      <Navbar /> 
      <Routes>
        <Route path="/auth" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </>
    )
  }
}
 
export default App;


