import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './../styles/App.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is where the welcome message will appear.</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About This Application</h1>
      <p>This app demonstrates basic routing with React Router.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
