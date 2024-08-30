const request = require('supertest');
const app = require('./../src/index');
const { expect } = require('chai');

describe.skip('API Tests', () => {

  // Test GET /api
  it('should return Hello, World! on GET /api', (done) => {
    request(app)
      .get('/api')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Hello, World!');
        done();
      });
  });

  // Test POST /api/data with valid data
//   it('should return a personalized message on POST /api/data', (done) => {
//     request(app)
//       .post('/api/data')
//       .send({ name: 'John' })
//       .expect(201)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body).to.be.an('object');
//         expect(res.body.message).to.equal('Hello, John!');
//         done();
//       });
//   });

  // Test POST /api/data with missing name
//   it('should return an error if name is not provided on POST /api/data', (done) => {
//     request(app)
//       .post('/api/data')
//       .send({})
//       .expect(400)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body).to.be.an('object');
//         expect(res.body.error).to.equal('Name is required');
//         done();
//       });
//   });

});
