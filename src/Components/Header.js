import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomePath, BoilerplatePath } from '../Routes';

const mapStateToProps = (rootState, ownProps) => {
  console.log(rootState.router);
  return {
    current_path: rootState.router.location.pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ current_path }) => {
    return (
      <header>
        <nav>
          <Link
            to={HomePath}
            className={current_path === HomePath ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            to={BoilerplatePath}
            className={current_path === BoilerplatePath ? 'active' : ''}
          >
            Boilerplate
          </Link>
        </nav>
      </header>
    );
  }
);
