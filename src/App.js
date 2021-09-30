import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Trading from './Trading';
import Markets from './Markets';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/trading" component={Trading}/>
          <Route path="/markets" component={Markets}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere eu purus et posuere.</p>
  </div>
);

export default App;