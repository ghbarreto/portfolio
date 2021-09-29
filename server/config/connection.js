const keys = require('./keys');
const mongoose = require('mongoose');

const email_send = mongoose.createConnection(keys.mongoURI, {
  dbName: 'email-sender',
});

module.exports = {
  email_send,
};
