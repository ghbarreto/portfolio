import { DETAILS, SEND_EMAIL } from '../actions/types';

export default function portfolioReducer(state = [], action) {
  switch (action.type) {
    case DETAILS:
      return { state, details: action.payload };
    case SEND_EMAIL:
      return { state, email: action.payload };
    default:
      return state;
  }
}
