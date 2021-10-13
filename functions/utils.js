require('dotenv').config();
const Spotify = require("spotify-web-api-node");

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

module.exports.spotifyApi = new Spotify({
	clientId: CLIENT_ID,
	clientSecret: CLIENT_SECRET,
	redirectUri: REDIRECT_URI,
});
