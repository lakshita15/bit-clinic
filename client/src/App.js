import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register";

function App() {
  return (
    <React.Fragment>
    
      
      <div className="safe-space" />
      <Router>
        <Switch>
         
          <Route path="/Login" exact component={Login}></Route>
          <Route path="/Register" exact component={Register}></Route>
         
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
