exports.handler = (event, context, callback) => {
  return callback(null, {
    statusCode: 301,
    headers: {
      Location: 'https://www.tomdoughty.co.uk'
    }
  });
};
