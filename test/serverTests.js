const { expect } = require('chai');
// const request = require('request');
const rp = require('request-promise');

const PORT = process.env.STEAMLY_TEST_SERVER_PORT || 3000;

describe('Server', () => {
  describe('GET /', () => {
    it('should return index Home Page', (done) => {
      rp({
        method: 'GET',
        uri: `http://127.0.0.1:${PORT}/`,
      })
        .then((res) => {
          expect(res).to.equal('Home Page');
        });
      done();
    });
  });

  describe('GET /api/v1/recommendations/user/:userId', () => {
    it('should return the specified recommendation for a specific user', (done) => {
      rp({
        method: 'GET',
        uri: `http://127.0.0.1:${PORT}/api/v1/recommendations/user/32`,
      })
        .then((res) => {
          const results = JSON.parse(res);
          expect(results).to.be.an('object');
          expect(results).to.have.property('recommended');
          expect(results).to.have.property('random');
        });
      done();
    });
  });
});
