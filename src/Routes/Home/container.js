import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import './container.css';
import { increment, decrement } from './reducer';
import { BoilerplatePath } from '../../Routes';

const mapStateToProps = (rootState, ownProps) => {
  return {
    count: rootState.Home.count
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
    decrement_handler: e => {
      e.preventDefault();
      dispatch(decrement());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({
    count,
    navigate_to_boilerplate_handler,
    increment_handler,
    decrement_handler
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
            <button type="submit">Increment</button>
          </form>

          <form onSubmit={decrement_handler}>
            <button type="submit">Decrement</button>
          </form>
        </div>
      </div>
    );
  }
);
