import React from 'react';
import { connect } from 'react-redux';
import './container.css';
import { load_new_gif_url } from './reducer';

const mapStateToProps = (rootState, ownProps) => {
  return {
    error: rootState.Boilerplate.error,
    busy: rootState.Boilerplate.busy,
    gif_url: rootState.Boilerplate.gif_url
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load_new_gif_handler: e => {
      e.preventDefault();
      dispatch(load_new_gif_url());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ error, busy, gif_url, load_new_gif_handler }) => {
    return (
      <div className="page-body boilerplate">
        <h1>Boilerplate</h1>
        {error ? (
          <div className="gif error">{error}</div>
        ) : gif_url === null ? (
          <div className="gif loading">Loading...</div>
        ) : (
          <div className="gif" style={{ backgroundImage: `url(${gif_url})` }} />
        )}
        <form onSubmit={load_new_gif_handler}>
          <button type="submit" disabled={busy}>
            Load New GIF
          </button>
        </form>
      </div>
    );
  }
);
