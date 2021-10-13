require('dotenv').config();
const { spotifyApi } = require('./utils');

exports.handler = async (event, context, callback) => {
  try {
    const { code, state } = event.queryStringParameters;

    // Ensure state returned from auth matches state stored in cookie 
    if (!event.headers.cookie.includes(`state=${state}`)) {
      throw new Error('State mismatch');
    }

    // Generate access token and refresh token
    const { body: { access_token, refresh_token }} = await spotifyApi.authorizationCodeGrant(code);

    // Redirect back to application with tokens in query string and delete state cookie
    return callback(null, {
      statusCode: 302,
      headers: {
        'Location': `${process.env.APP_URI}login/${access_token}/${refresh_token}`,
        'Access-Control-Expose-Headers': 'Set-Cookie',
        'Set-Cookie': 'state=deleted; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
      }
    })
  } catch(error) {
    // TODO create error route within application
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: error.message
      }),
    })
  }
};
