import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import 
  Login
 from "./Components/Login/Login.js";

function App() {
  return (
    <React.Fragment>
      <Login />
      
      <div className="safe-space" />
      <Router>
        <Switch>
         
          <Route path="/Login" exact component={Login}></Route>
          
         
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
