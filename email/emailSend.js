const email_sender = require('../models/email.models');
const assert = require('assert');
const { response } = require('./emailSendFunction');

module.exports = app => {
  app.post('/api/contact', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    assert(name, email, message);
    response(name, email, message);

    try {
      const insertValues = await email_sender({
        name,
        email,
        message,
      });
      insertValues.save();
      res.status(200).send('inserted data: ', { name }, { email }, { message });
    } catch (err) {
      res.status(404).send('Unable to insert data: ', err);
    }
  });
};
