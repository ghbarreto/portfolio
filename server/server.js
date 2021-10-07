const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./config/connection');
require('./email/emailSend')(app);
require('./recaptcha/recaptcha')(app);

app.listen(PORT, () => console.log('Server is listening on port 5000'));
