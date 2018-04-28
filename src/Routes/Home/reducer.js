const RESET = 'home/RESET';
const INCREMENT_REQUESTED = 'home/INCREMENT_REQUESTED';
const INCREMENT = 'home/INCREMENT';
const DECREMENT_REQUESTED = 'home/DECREMENT_REQUESTED';
const DECREMENT = 'home/DECREMENT';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...initialState
      };

    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    default:
      return state;
  }
};

export const on_route_match = () => {
  return (dispatch, getState) => {
    dispatch({
      type: RESET
    });

    // react-snapshot does build time pre rendering via jsdom
    document.title = 'Home';
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.querySelector('html').scrollTop = 0;
  };
};

export const increment = () => {
  return (dispatch, getState) => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    dispatch({
      type: INCREMENT
    });
  };
};

export const incrementAsync = () => {
  return (dispatch, getState) => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 1000);
  };
};

export const decrement = () => {
  return (dispatch, getState) => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    dispatch({
      type: DECREMENT
    });
  };
};

export const decrementAsync = () => {
  return (dispatch, getState) => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 1000);
  };
};
