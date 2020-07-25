import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Shop from './Components/Shop';
import Item from './Components/Item';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/shop/:id"  component={Item}/>
      </Switch>
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
