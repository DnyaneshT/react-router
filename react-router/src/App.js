import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Shop from './Components/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
      <switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
      </switch>
    </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
    </div>
  )
}


export default App;
