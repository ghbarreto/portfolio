import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { connect, useDispatch } from 'react-redux';

import '../scss/index.scss';
import '../scss/FormContainer.scss';

import Icons from './Icons';
import Recaptcha from './Recaptcha';
import { submitEmail } from '../actions';

const FormComponent = ({ email, name, message, button, ...props }) => {
    const dispatch = useDispatch();
    const [isFocused, setIsFocused] = useState(false);
    const [captchaCheck, setCaptchaCheck] = useState();
    const [correctValues, setCorrectValues] = useState();
    const [emailSentCounter, setEmailSentCounter] = useState(0);
    const [incorrectValues, setIncorrectValues] = useState();
    const setFocus = isFocused && emailSentCounter === 0 ? 'lost-focus' : '';
    const showAlert =
        isFocused && emailSentCounter === 0 ? <Icons icon={'lostFocus'}>Please, fill all fields.</Icons> : '';

    const setCaptchaChecking = value => {
        if (value) {
            return setCaptchaCheck(value);
        }
    };

    const submitForm = ({ email, name, message }) => {
        if (name && message && email && captchaCheck === true)
            try {
                dispatch(submitEmail(name, email, message));
                setCorrectValues(true);
                setIsFocused(false);
                setEmailSentCounter(1);
            } catch (err) {
                setIncorrectValues(err);
            }
        if (!name || !email || !message || captchaCheck === false) return setIsFocused(true);
    };
    const onFocused = () => {
        setIsFocused(false);
    };
    const lostFocus = () => {
        setIsFocused(true);
    };

    return (
        <>
            {correctValues ? (
                <div className="form-container" style={{ width: '100%' }}>
                    <div className="email-sent">
                        <Icons icon={'emailSent'} sizes={23} />
                        Thank you for contacting me!
                    </div>
                </div>
            ) : (
                <div className="form-container">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: '',
                        }}
                        onSubmit={(values, { resetForm }) => {
                            onFocused();
                            submitForm(values);
                            resetForm();
                            setIsFocused(false);
                        }}
                    >
                        <Form onBlur={() => lostFocus()} onFocus={() => onFocused()}>
                            <div className="alert-message">{showAlert}</div>

                            <div style={{ color: 'red' }} className="">
                                {incorrectValues}
                            </div>

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
                            <div>
                                <div onFocus={() => onFocused()} className="display-captcha">
                                    {captchaCheck ? (
                                        <div className="authenticated-message">
                                            <Icons icon="check" />
                                            Authenticated
                                        </div>
                                    ) : (
                                        <Recaptcha
                                            onBlur={() => lostFocus()}
                                            captchaCheck={captchaCheck}
                                            setCaptchaChecking={setCaptchaChecking}
                                        />
                                    )}
                                </div>
                                <button
                                    onBlur={() => lostFocus()}
                                    onFocus={() => onFocused()}
                                    className="button-field button"
                                    type="submit"
                                >
                                    <Icons icon="submit" style={{ fontWeight: 'bold' }}>
                                        {button}
                                    </Icons>
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        checked_captcha: state.details,
    };
};

export default connect(mapStateToProps, { submitEmail })(FormComponent);
