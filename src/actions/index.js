import { DETAILS } from './types';

export const details = place => async dispatch => {
  dispatch({ type: DETAILS, payload: place });
};
