import fetch from 'isomorphic-unfetch';

exports.handler = async (event, context, callback) => {
  const { email } = JSON.parse(event.body);

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Email is required'
      })
    };
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_DATACENTER;

    const data = {
      email_address: email,
      status: 'subscribed'
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `Daniel1:${API_KEY}-${DATACENTER}`,
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );

    if (response.status >= 400) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`
        })
      };
    }
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        error: error.message || error.toString()
      })
    };
  }

  return {
    statusCode: 201,
    body: JSON.stringify({ error: '' })
  };
};