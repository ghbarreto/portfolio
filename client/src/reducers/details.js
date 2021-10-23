import { DETAILS, SEND_EMAIL, CHECKED_CAPTCHA } from '../actions/types';

export default function portfolioReducer(state = [], action) {
  switch (action.type) {
    case DETAILS:
      return { state, details: action.payload };
    case SEND_EMAIL:
      return { state, email: action.payload };
    case CHECKED_CAPTCHA:
      return { state, captcha: action.payload };
    default:
      return state;
  }
}
