const RESET = 'home/RESET';
const INCREMENT = 'home/INCREMENT';
const DECREMENT = 'home/DECREMENT';

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...initialState
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
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
  };
};

export const increment = () => {
  return (dispatch, getState) => {
    dispatch({
      type: INCREMENT
    });
  };
};

export const decrement = () => {
  return (dispatch, getState) => {
    dispatch({
      type: DECREMENT
    });
  };
};
