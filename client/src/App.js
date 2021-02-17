import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register";
import Patient from "./Components/Profile/Patient/Patient";
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <React.Fragment>
    <Header/>
      
      <div className="safe-space" />
      <Router>
        <Switch>
        <Route path="/" exact component={Home}></Route>
          <Route path="/Login" exact component={Login}></Route>
          <Route path="/Register" exact component={Register}></Route>
          <Route path="/Patient" exact component={Patient}></Route>
        </Switch>
      </Router>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
