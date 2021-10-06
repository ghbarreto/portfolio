import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { connect, useDispatch } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { KEY } from '../utils/keys';

import '../scss/index.scss';
import '../scss/FormContainer.scss';

import { submitEmail } from '../../actions';

const FormComponent = ({ email, name, message, button, ...props }) => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const setFocus = isFocused ? 'lost-focus' : '';
  const showAlert = isFocused ? 'Please fill all fields' : '';

  const submitForm = ({ email, name, message }) => {
    if (name && message && email && captcha.length > 1)
      return setIsFocused(false);
    if (!name || !email || !message || captcha.length === 0)
      return setIsFocused(true);

    dispatch(submitEmail(name, email, message));
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
    <div className="form-container">
      <div className="alert-message">{showAlert}</div>
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
            <ReCAPTCHA
              theme="dark"
              sitekey={KEY}
              onChange={onChangeRecaptcha}
            />
          </div>
          <button className="button-field button" type="submit">
            {button}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default connect(null, { submitEmail })(FormComponent);
