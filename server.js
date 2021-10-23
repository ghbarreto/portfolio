const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

require('./config/connection');
require('./email/emailSend')(app);
require('./recaptcha/recaptcha')(app);

app.listen(PORT, () => console.log('Server is listening on port 5000'));
