const request = require('supertest');
const app = require('../app');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');

describe('User Test', () => {
  const password = 'admin'; // datainput
  const hashing = hashPassword(password);
  const compare = comparePassword(password, hashing);
  it('Password compare to be return boolean', () => { // unit testing
    expect(typeof compare).toBe('boolean');
  });
  it('Should return true when compile password', () => {
    expect(compare).toEqual(true);
  });

  it('should fetch all albums', async () => { // integration testing
    const res = await request(app).get('/photos');
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty('post');
  });
});
