import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../action/counterAction';

class AboutChildContainer extends Component {
    constructor(props) {
        super(props);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    decrementCounter() {
        this.props.decrement(this.props.counter);
    }
    render() {
        return (
            <div>
                i am child   <span>{this.props.match.url}</span>
                <button onClick={() => this.decrementCounter()}>-</button>
                <div>You are now at {this.props.location.pathname}</div>

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
        decrement: (value) => dispatch(decrement(value)),
    }
}

export default connect(mapStateToprops, mapDispatchToprops)(AboutChildContainer);

