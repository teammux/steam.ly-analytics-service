const axios = require('axios');

const getRecommendation = (userId) => {
  axios.get(`http://127.0.0.1:3000/api/v1/recommendations/user/${userId}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch(err => console.log(err));
};

const getRecsForUser = (userId) => {
  const user = {
    id: userId,
    preference: 'ACTION',
  };
  axios.post('http://127.0.0.1:3000/api/v1/recommendations/user', user)
    .then((response) => {
      console.log(response.data);
    })
    .catch(err => console.log(err));
};

const getRandomInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// getRecsForUser(100);
// getRecommendation(100);

setInterval(() => {
  getRecsForUser(getRandomInclusive(0, 1000000));
}, 100);

// setInterval(() => {
//   getRecommendation(getRandomInclusive(0, 1000000));
// }, 100);

// const user = {
//     id: userId,
//     username: 'user_48',
//     preference: 'NONE',
//     location: 'ASIA',
//     age: 'over 50',
//     gender: 'male',
// }
