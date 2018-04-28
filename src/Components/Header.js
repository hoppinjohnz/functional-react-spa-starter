import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomePath } from '../Routes/Home';
import { BoilerplatePath } from '../Routes/Boilerplate';

const mapStateToProps = (rootState, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(({}) => {
  return (
    <header>
      <nav>
        <Link to={HomePath}>Home</Link>
        <Link to={BoilerplatePath}>Boilerplate</Link>
      </nav>
    </header>
  );
});
