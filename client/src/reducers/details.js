import { DETAILS } from '../actions/types';

export default function serverStatusReducer(state = [], action) {
  switch (action.type) {
    case DETAILS:
      return { state, details: action.payload };
    default:
      return state;
  }
}
