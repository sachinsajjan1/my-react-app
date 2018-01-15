import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import AboutChildContainer from './AboutChildContainer';
class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>

        <div>
          <ul>
            <li><Link to={`${this.props.match.url}/child`}>About child</Link></li>
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

export default About;