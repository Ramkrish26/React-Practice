import React, { Component } from "react";
import { connect } from "react-redux";

class CounterUsingReduxClass extends Component {
  incrementCounter = () => {
    this.props.incrementHandler();
  };
  render() {
    return (
      <div>
        <h1>Counter class{this.props.counter}</h1>
        <button onClick={this.incrementCounter.bind(this)}>Increment</button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    counter: state.counter,
  };
};

const mapHandler = (dispatch) => {
  return {
    incrementHandler: () => {
      dispatch({ type: "increment" });
    },
  };
};

export default connect(mapState, mapHandler)(CounterUsingReduxClass);
