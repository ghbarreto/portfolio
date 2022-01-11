const sgMail = require('@sendgrid/mail');
const sgApi = require('../config/keys');
const { callbackEmailTemplate } = require('./callbackEmailTemplate');

const MY_EMAIL = 'henriqve.dev@gmail.com';

const response = async (name, email, message) => {
  send_email(
    msg_template(
      'gh.barreto@hotmail.com',
      MY_EMAIL,
      `[IMPORTANT] Contact from ${name}`,
      `<strong>Email: ${email}, <br /> Subject: ${message}</strong>`
    )
  );
  bounce_email(email, name);
};

const bounce_email = (email, name) => {
  send_email(
    msg_template(
      email,
      MY_EMAIL,
      `Thank you for your e-mail, ${name}!`,
      callbackEmailTemplate
    )
  );
};

const msg_template = (to, from, subject, html) => {
  return {
    to,
    from,
    subject,
    html,
  };
};

const send_email = msg => {
  sgMail.setApiKey(sgApi.sendGridApi);
  try {
    sgMail.send(msg);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  response,
};
