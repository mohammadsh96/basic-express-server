'use strict';
const server = require("../src/server");
const supertest =require("supertest");
const request = supertest(server.app);

describe('API Server', () => {
    test('get data from home route ', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('hello ');
    });

    
    test('get data from /data route', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');

    });

    it('handle the 404 not found error', async () => {
        const response = await request.get('/abc');
        expect(response.status).toEqual(404);
        // expect(response.status).toBe(404);

    });
    it('handle server internal error 500 ', async () => {
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    })
})