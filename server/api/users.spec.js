const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const User = db.model('user');

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('Home route /', () => {

    it('GET /', () => {
      return request(app).get('/').expect(200)
      .then(res => {
        expect(res.status).to.be.equal(200);
      });
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
