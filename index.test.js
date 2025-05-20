// app.test.js
const request = require('supertest'); // Import supertest
const app = require('./app');         // Import your Express app

describe('GET /', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('should respond with "hello world!" message', async () => {
    const response = await request(app).get('/');
    expect(response.body.message).toBe('hello world!');
  });

  // You can combine multiple assertions in one test if they are related
  test('should respond with correct JSON and status for root', async () => {
    await request(app)
      .get('/')
      .expect(200)               // Supertest can directly assert status codes
      .expect('Content-Type', /json/) // Check content type
      .expect({ message: 'hello world!' }); // Supertest can directly assert JSON body
  });
});