const request = require('supertest')
const app = require('../app')

describe('Sample Test', () => {
  it('should fetch all albums', async () => {
    const res = await request(app).get('/photos');
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty('post');
  });
})