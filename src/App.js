import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Details from './components/Details'
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Route path="/registration" exact component={RegistrationForm}/>
      <Route path="/" exact component={Home}/>
      <Route path='/Details/:id' component={Details}/>
      <Footer />
      
      
      </Router>
      
    </div>
  );
}

export default App;
