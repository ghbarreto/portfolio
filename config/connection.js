const keys = require('./keys');
const mongoose = require('mongoose');

console.log(keys.mongoURI)

const email_send = mongoose.createConnection(keys.mongoURI, {
  dbName: 'email-sender',
});

module.exports = {
  email_send,
};
