import { UPDATE_LOADING_STATE } from './types';

const INITIAL_STATE = {
  text: 'Loading',
  isLoading: false,
};

export const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LOADING_STATE:
      return {
        ...state,
        isLoading: action.isLoading,
        text: action.text,
      };
    default:
      return state;
  }
};
