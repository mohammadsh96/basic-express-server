'use strict';
const validator = require('../middlewears/validator');
const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('validator Test', () => {
  test('Should check if the name is string and not empty', async () => {
    const response = await request.get('/person?name=mohammad');
    expect(response.status).toBe(200);
  });
  test('Should check if the name is not string', async () => {
    const response = await request.get(`/person?name=444`);
    expect(response.status).toBe(500);
  });
  test('Should check if the name is not string and not empty', async () => {
    const response = await request.get('/person?name=');
    expect(response.status).toBe(500);
  });
});