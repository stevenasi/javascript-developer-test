const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const fetchedUrls = urls.map(async (url) => {
    const { body, status } = await httpGet(url);
    const { message } = JSON.parse(body);


    if (status === 200) {
      return { 'Arnie Quote': message };
    }
    
    
    return { 'FAILURE': message };
  });

  return Promise.all(fetchedUrls);
};

module.exports = {
  getArnieQuotes,
};
