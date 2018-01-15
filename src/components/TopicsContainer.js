import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'


class TopicsContainer extends Component {
  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
          </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>
              Components
          </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
          </Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
          <Route exact path={this.props.match.url} render={() => (
            <h3>Please select a topic. {this.props.match.url}</h3>
          )} />
        </Switch>

      </div>
    )
  }
}
const Topic = (props) => (
  <div>
    <h3>{props.match.url}   {props.match.params.topicId}</h3>
  </div>
)
export default TopicsContainer;