import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; 

const Home = () => {
  return <h1>Welcome to the Home Page!</h1>;
};

const About = () => {
  return <h1>About this application!</h1>;
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
