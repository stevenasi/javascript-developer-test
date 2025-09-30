const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const fetchedUrls = urls.map(async (url) => {
    const response = await httpGet(url);
    const data = JSON.parse(response.body);


    if (response.status === 200) {
      return { 'Arnie Quote': data.message };
    }
    
    
    return { 'FAILURE': data.message };
  });

  return Promise.all(fetchedUrls);
};

module.exports = {
  getArnieQuotes,
};
