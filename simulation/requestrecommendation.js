const axios = require('axios');

const getRecommendation = (userId) => {
  axios.get(`http://127.0.0.1:3000/api/v1/recommendations/user/${userId}`, {
    params: {
      ID: 12,
    },
  })
    .then((response) => {
      console.log(response.data[0]);
    })
    .catch(err => console.log(err));
};

getRecommendation(432231);

