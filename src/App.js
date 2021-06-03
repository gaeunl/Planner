import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Components/Nav/Navbar'
import Home from './Components/Page/Home'
import About from './Components/Page/About'

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/calendar">
            <Home/>
          </Route>
          <Route exact path="/todo">
            <Home/>
          </Route>
          <Route exact path="/bucketList">
            <Home/>
          </Route><Route exact path="/resolution">
            <Home/>
          </Route>
          <Route exact path="*">
            <p>Error!!</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
