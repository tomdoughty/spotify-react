exports.handler = () => {
  return {
    statusCode: 301,
    headers: {
      'Location': 'https://www.tomdoughty.co.uk'
    }
  }
};
