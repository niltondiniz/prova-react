const axios = require('axios');

const apiKey = '3d3b8421a4f3c53f470b929aaeaf070a';  // Substitua pela sua chave API
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

axios.get(url)
  .then(response => {
    console.log('Data:', response.data);
    console.log('Successfully retrieved data!');
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    console.error('Response Status:', error.response ? error.response.status : 'No response');
    console.error('Response data:', error.response ? error.response.data : 'No response data');
  });
