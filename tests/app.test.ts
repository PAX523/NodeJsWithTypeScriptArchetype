import request from 'supertest';

import {app} from '../src/app';

import 'jest';

describe('GET /items/:id', () => {
    it('obtain item by ID', async () => {
        return request(app)
        .get('/items/23')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.statusCode).toBe(200);
        })
    });
});
