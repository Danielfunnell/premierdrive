const axios = require('axios');

exports.handler = function (event, context, callback) {
  // Fail early if no email was passed
  if (!context.body || !context.body.email) {
    callback('Missing email parameter');
    return;
  }

  const { email } = context.body;

  // Replace the 3 values below with your own
  const regionName = process.env.MAILCHIMP_REGION;
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const url = `https://${regionName}.api.mailchimp.com/3.0/lists/${listId}/members/`;

  axios
    .post(
      url,
      {
        // Tell Mailchimp to subscribe this email
        status: 'subscribed',
        // Note that Mailchimp takes an email_address field, not just email
        email_address: email,
      },
      {
        headers: {
          Authorization: `apikey ${apiKey}`,
        },
      }
    )
    .then(() => {
      // Things went well
      callback(null, { message: 'Email subscribed!' });
    })
    .catch(error => {
      // Things didn't go well
      callback(error.response.data);
    });
};
