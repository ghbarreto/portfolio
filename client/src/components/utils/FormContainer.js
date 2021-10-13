import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { connect, useDispatch } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { bindActionCreators } from 'redux';

import '../scss/index.scss';
import '../scss/FormContainer.scss';

import { CLIENT_KEY } from '../utils/keys';
import { submitEmail, checkCaptcha } from '../../actions';

const FormComponent = ({ email, name, message, button, ...props }) => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [captcha, setCaptcha] = useState();
  const [flag, setFlag] = useState();
  const [captchaCheck, setCaptchaCheck] = useState();
  const setFocus = isFocused ? 'lost-focus' : '';
  const showAlert = isFocused ? 'Please fill all fields' : '';

  const getCaptchaValidation = async () => {
    if (!captcha) return;
    await dispatch(checkCaptcha(captcha));
    setFlag(true);
  };

  const setCaptchaValidation = () => {
    if (props.checked_captcha.captcha) {
      return setCaptchaCheck(props.checked_captcha.captcha.success);
    }
  };

  useEffect(() => {
    setCaptchaValidation();
  }, [flag]);

  useEffect(() => {
    getCaptchaValidation();
  }, [captcha]);

  const submitForm = ({ email, name, message }) => {
    if (name && message && email && captchaCheck === true)
      return setIsFocused(false) && dispatch(submitEmail(name, email, message));
    if (!name || !email || !message || captchaCheck === false)
      return setIsFocused(true);
  };
  const onChangeRecaptcha = value => {
    setCaptcha(value);
  };

  const onFocused = () => {
    setIsFocused(false);
  };
  const lostFocus = () => {
    setIsFocused(true);
  };
  return (
    <>
      <div className="form-container">
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          onSubmit={values => {
            onFocused();
            submitForm(values);
          }}
        >
          <Form>
            <div className="alert-message">{showAlert}</div>

            <Field
              className={`field ${setFocus}`}
              name="name"
              type="text"
              placeholder={name}
              onBlur={() => lostFocus()}
              onFocus={() => onFocused()}
            />
            <Field
              className={`field ${setFocus}`}
              name="email"
              type="email"
              placeholder={email}
              onBlur={() => lostFocus()}
              onFocus={() => onFocused()}
            />
            <Field
              as="textarea"
              className={`field field-area field-message ${setFocus}`}
              name="message"
              type="text"
              placeholder={message}
              onBlur={() => lostFocus()}
              onFocus={() => onFocused()}
            />
            <div className="display-captcha">
              {captchaCheck ? (
                <div>Authenticated</div>
              ) : (
                <ReCAPTCHA
                  theme="dark"
                  sitekey={CLIENT_KEY}
                  onChange={onChangeRecaptcha}
                />
              )}
            </div>
            <button className="button-field button" type="submit">
              {button}
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    checked_captcha: state.details,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators(
      {
        submitEmail,
        checkCaptcha,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
