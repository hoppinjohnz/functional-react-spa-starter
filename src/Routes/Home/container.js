import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import './container.css';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from './reducer';
import { BoilerplatePath } from '../../Routes';

const mapStateToProps = (rootState, ownProps) => {
  return {
    count: rootState.Home.count,
    isIncrementing: rootState.Home.isIncrementing,
    isDecrementing: rootState.Home.isDecrementing
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigate_to_boilerplate_handler: e => {
      e.preventDefault();
      dispatch(push(BoilerplatePath));
    },
    increment_handler: e => {
      e.preventDefault();
      dispatch(increment());
    },
    incrementAsync_handler: e => {
      e.preventDefault();
      dispatch(incrementAsync());
    },
    decrement_handler: e => {
      e.preventDefault();
      dispatch(decrement());
    },
    decrementAsync_handler: e => {
      e.preventDefault();
      dispatch(decrementAsync());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({
    count,
    isIncrementing,
    isDecrementing,
    navigate_to_boilerplate_handler,
    increment_handler,
    incrementAsync_handler,
    decrement_handler,
    decrementAsync_handler
  }) => {
    return (
      <div className="page-body home">
        <h1>Home</h1>

        <form onSubmit={navigate_to_boilerplate_handler}>
          <button type="submit">
            Dispatch a redux action to navigate to the Boilerplate page
          </button>
        </form>

        <p>Count: {count}</p>

        <div className="count-actions">
          <form onSubmit={increment_handler}>
            <button type="submit" disabled={isIncrementing}>
              Increment
            </button>
          </form>

          <form onSubmit={incrementAsync_handler}>
            <button type="submit" disabled={isIncrementing}>
              Increment Async
            </button>
          </form>

          <form onSubmit={decrement_handler}>
            <button type="submit" disabled={isDecrementing}>
              Decrement
            </button>
          </form>

          <form onSubmit={decrementAsync_handler}>
            <button type="submit" disabled={isDecrementing}>
              Decrement Async
            </button>
          </form>
        </div>
      </div>
    );
  }
);
