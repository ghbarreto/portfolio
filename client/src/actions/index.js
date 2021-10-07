import { DETAILS, SEND_EMAIL, CHECKED_CAPTCHA } from './types';
import axios from 'axios';

export const details = place => async dispatch => {
  dispatch({ type: DETAILS, payload: place });
};

export const checkCaptcha = token => async dispatch => {
  const res = await axios.post("/api/recaptcha", {token})
  dispatch({ type: CHECKED_CAPTCHA, payload: res.data });
};


export const submitEmail =
  (name, email, message, ...props) =>
  async dispatch => {
    const res = await axios.post('/api/contact', {
      name,
      email,
      message,
      ...props,
    });
    console.log(name, email, message);
    return dispatch({ type: SEND_EMAIL, payload: res.data });
  };
