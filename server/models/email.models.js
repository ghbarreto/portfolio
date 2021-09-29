const { Schema } = require('mongoose');
const { email_send } = require('../config/connection');

const email_schema = new Schema(
  {
    name: String,
    email: String,
    message: String,
    recaptcha: false,
    dateCreated: { type: Date, default: Date.now },
  },
  { collection: 'email', strict: false }
);

const email_sender = email_send.model('emailSend', email_schema);

module.exports = email_sender;
