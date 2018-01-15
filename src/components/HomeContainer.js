import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { increment, decrement } from '../action/counterAction';
import AboutChildContainer from './AboutChildContainer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
    // this.decrementCounter = this.decrementCounter.bind(this);

  }
  incrementCounter() {
    this.props.increment(this.props.counter);
  }
  // decrementCounter() {
  //   this.props.decrement(this.props.counter);
  // }
  render() {
    return (
      <div>
        <h2>Homepage</h2>
        <button onClick={() => this.incrementCounter()}>+</button>
        {/* <button onClick={() => this.decrementCounter()}>-</button> */}
        <h1>{this.props.counter}</h1>
        <span>{this.props.match.url}</span>
        <div>
          <ul>
            <li><Link to={`${this.props.match.url}/child`}>child</Link></li>
          </ul>

          <hr />
          <Switch>
            <Route path={`${this.props.match.url}/child`} component={AboutChildContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}

function mapStateToprops(state, ownProps) {
  debugger
  return {
    counter: state.counter
  }
}

function mapDispatchToprops(dispatch) {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  }
}

export default connect(mapStateToprops, mapDispatchToprops)(Home);
