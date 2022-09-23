import React from 'react';
import './App.css';
import HomePage from './routes/HomePage.jsx';
import {Routes, Route} from 'react-router-dom'
import NavigationBar from './NavigationBar';
import Login from './routes/Login'
import Signup from './routes/Signup';
function App() {
  
  return (
  <Routes>
  <Route path='/' element={<NavigationBar />}>
    <Route index element={<HomePage />}/>
    <Route path='login' element= {<Login />}/>
    <Route path='signup' element= {<Signup />}/>
    <Route path='HomePage' element= {<HomePage />}/>
    </Route>
  </Routes>
  );
}

export default App;


