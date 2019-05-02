// Import react a js library for the frontend
import React from "react";
// BrowserRouter is the router implementation for HTML5 browsers.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import the user made files: home, saved, NoMatch, Nav
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App() {
  return (
    // Router component initialized to virtual DOM
    <Router>
      <div>
        <Nav />
        {/* Switch does what it says, it switches routes */}
        <Switch>
          {/* returns the home.js file from component/pages/home.js */}
          <Route exact path="/" component={Home} />
          {/* returns the home.js file from component/pages/saved.js */}
          <Route exact path="/saved" component={Saved} />
          {/* returns the home.js file from component/pages/NoMatch.js, which will be appended to the end of the previous component */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
// exports makes App available to other modules
export default App;
