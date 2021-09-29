const email_sender = require('../models/email.models');
const assert = require('assert');
const { response } = require('./emailSendFunction');

module.exports = app => {
  app.post('/contact', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const captcha = req.body.captcha;
    const message = req.body.message;

    assert(captcha, 'please add a captcha');

    response(name, email, message);
    try {
      const insertValues = await email_sender({
        name,
        email,
        message,
        captcha,
      });
      insertValues.save();
      res.status(200).send('inserted data');
    } catch (err) {
      res.status(404).send('Unable to insert data: ', err);
    }
  });
};
