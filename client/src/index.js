import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from '../src/components/welcome/welcome'
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Texttoimage from './components/textImage/textImage'


 import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <BrowserRouter>
  <App/>
      <Routes>
<Route path="/" element={<Welcome/>}></Route>
<Route path='/signup' element = {<Signup/>} ></Route>
<Route  path='/login' element={<Login/>}></Route>
<Route path='/text' element={<Texttoimage/>}  ></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


