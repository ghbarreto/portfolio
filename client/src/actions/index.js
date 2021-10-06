import { DETAILS, SEND_EMAIL } from './types';
import axios from 'axios';

export const details = place => async dispatch => {
  dispatch({ type: DETAILS, payload: place });
};

export const submitEmail =
  (name, email, message, ...props) =>
  async dispatch => {
    // const res = await axios.post('/api/orders', {
    //   name,
    //   email,
    //   message,
    //   ...props,
    // });
    console.log(name, email, message)
    // return dispatch({ type: SEND_EMAIL, payload: res.data });
  };
