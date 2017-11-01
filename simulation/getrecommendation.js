const axios = require('axios');

const getRecommendation = (userId) => {
  axios.get(`http://127.0.0.1:3000/api/v1/recommendations/user/${userId}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch(err => console.log(err));
};

const getRandomInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


setInterval(() => {
  getRecommendation(getRandomInclusive(0, 1000000));
}, 100);

