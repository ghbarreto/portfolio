const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.post(`/api/recaptcha`, async (req, res) => {
    const token = req.body.token;

    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${keys.GOOGLE_SECRET}&response=${token}`
    );

    res.json(data);
  });
};
