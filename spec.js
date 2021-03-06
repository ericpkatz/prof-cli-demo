const app = require('supertest')(require('./app'));
const db = require('./db');
const { expect } = require('chai');
describe('the great app', ()=> {
  beforeEach(()=> db.syncAndSeed());
  describe('GET /', ()=> {
    it('returns foo', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).contains('foo');
    });
  });
});
