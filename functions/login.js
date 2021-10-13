require('dotenv').config();
const crypto = require('crypto');

const { spotifyApi } = require('./utils');

exports.handler = () => {
  // Create state so it can be used to ensure same browser logs in as creates original request
  const state = crypto.randomBytes(20).toString('hex');
  const url = spotifyApi.createAuthorizeURL(['user-read-private', 'user-read-email'], state);
  console.log(url)

  // Redirect to Spotify auth and set state cookie
  return {
    statusCode: 302,
      headers: {
         'Location': url,
         'Access-Control-Expose-Headers': 'Set-Cookie',
         'Set-Cookie': `state=${state}; Path=/; Max-Age=60`,
      }
  }
};
