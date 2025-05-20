const request = require('supertest');
const app = require('./index');

describe('Express App Tests', () => {
  describe('GET /', () => {
    it('should return hello world message', async () => {
      const response = await request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toEqual({
        message: 'hello world!'
      });
    });
  });

  describe('Non-existent route', () => {
    it('should return 404 for non-existent routes', async () => {
      await request(app)
        .get('/non-existent-route')
        .expect(404);
    });
  });
});
