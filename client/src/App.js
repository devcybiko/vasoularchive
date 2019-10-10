import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Discography from "./pages/Discography";
import Detail from "./pages/Detail";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addentry" component={Add} />
          <Route exact path="/discography" component={Discography} />
          <Route exact path="/records/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

