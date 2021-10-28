import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { connect, useDispatch } from 'react-redux';

import { checkCaptcha } from '../../../actions';

const CLIENT_KEY = '6LeWr7IcAAAAAOtW0Gc5Zu_nlspO8uHAcRYm1Esu';

const Recaptcha = ({ setCaptchaChecking, checked_captcha, ...props }) => {
  const dispatch = useDispatch();
  const [captcha, setCaptcha] = useState();

  const getCaptchaValidation = async () => {
    if (!captcha) return;
    dispatch(checkCaptcha(captcha));
  };

  const setCaptchaValidation = () => {
    if (checked_captcha.captcha) {
      return setCaptchaChecking(checked_captcha.captcha.success);
    }
  };

  useEffect(() => {
    setCaptchaValidation();
  }, [checked_captcha.captcha]);

  useEffect(() => {
    getCaptchaValidation();
  }, [captcha]);

  const onChangeRecaptcha = value => {
    setCaptcha(value);
  };

  return (
    <ReCAPTCHA
      theme="dark"
      size="normal"
      badge="bottomright"
      sitekey={CLIENT_KEY}
      onChange={onChangeRecaptcha}
    />
  );
};

const mapStateToProps = state => {
  return {
    checked_captcha: state.details,
  };
};

export default connect(mapStateToProps, { checkCaptcha })(Recaptcha);
