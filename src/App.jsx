// import React ,{useState} from "react";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";

import './App.css';
import {Login} from "./Login";
import {Register} from './Register';
import { Choos } from "./Choos";
import {Home} from'./Home/Home'


function App() {
  // const[currentForm,setCurrentForm]=useState('Login');
  // const toggleform=(formName) =>setCurrentForm(formName);

  return (
    <div className="App">
     <Router>  
      <Login/>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Choos" element={<Choos/>}/>
      <Route path="/Home/Home" element={<Home/>}/>
      <Route/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
