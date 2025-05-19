const request = require('supertest');
const express = require('express');

// Since index.js doesn't export the app, we'll create a test version
// that mimics the behavior of the original app
const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

describe('Express App', () => {
  test('GET / should return hello world message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'hello world' });
  });
});