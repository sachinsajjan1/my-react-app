import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);

    }

    login() {

    }
    render() {
        return (
            <div>
                <h2>Login page</h2>
                <button onClick={() => this.login()}>Login</button>

            </div>
        )
    }
}

function mapStateToprops(state, ownProps) {
    return {
    }
}

function mapDispatchToprops(dispatch) {
    return {
    }
}

export default connect(mapStateToprops, mapDispatchToprops)(LoginContainer);
