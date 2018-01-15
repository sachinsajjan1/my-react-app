import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import TopicsContainer from './components/TopicsContainer';
import Home from './components/HomeContainer';
import About from './components/AboutContainer';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/home" component={Home} />

          <Route path="/about" component={About} />
          <Route path="/topics" component={TopicsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
