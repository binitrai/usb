import { UPDATE_LOADING_STATE } from './types';

export const updateLoader = (isLoading, text) => ({
  type: UPDATE_LOADING_STATE,
  isLoading,
  text,
});
