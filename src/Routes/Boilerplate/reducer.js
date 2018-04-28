import BoilerplateService from '../../Services/Boilerplate';

const RESET = 'boilerplate/RESET';
const SET_ERROR = 'boilerplate/SET_ERROR';
const SET_BUSY = 'boilerplate/SET_BUSY';
const SET_GIF_URL = 'boilerplate/SET_GIF_URL';

const initialState = {
  error: null,
  busy: false,
  gif_url: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...initialState
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case SET_BUSY:
      return {
        ...state,
        busy: action.payload
      };

    case SET_GIF_URL:
      return {
        ...state,
        gif_url: action.payload
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

    dispatch(load_new_gif_url());

    // react-snapshot does build time pre rendering via jsdom
    document.title = 'Boilerplate';
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.querySelector('html').scrollTop = 0;
  };
};

export const load_new_gif_url = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: SET_BUSY,
      payload: true
    });

    dispatch({
      type: SET_GIF_URL,
      payload: null
    });

    dispatch({
      type: SET_ERROR,
      payload: null
    });

    try {
      const gif_url = await BoilerplateService.get_random_gif_url();

      dispatch({
        type: SET_BUSY,
        payload: false
      });

      dispatch({
        type: SET_GIF_URL,
        payload: gif_url
      });
    } catch (e) {
      const error = `${e.status ? e.status : 500}: ${
        e.message ? e.message : JSON.stringify(e, null, 2)
      }`;

      dispatch({
        type: SET_ERROR,
        payload: error
      });

      dispatch({
        type: SET_BUSY,
        payload: false
      });
    }
  };
};
