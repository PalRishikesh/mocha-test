const request = require('supertest');
const app = require('../src/server');
const { expect } = require('chai');

describe('API Tests', () => {

  // Test GET /api
  it('should return Hello, World! on GET /api', (done) => {
    request(app)
      .get('/home')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
     
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Home page content');
        done();
      });
  });

  // Test POST /api/data with valid data
  it('should return a personalized message on POST /api/data', (done) => {

    const requestBody = {
      "name": "Testing in Thunder Supertest",
      "description": "Testing from local",
      "price": 10,
      "inStock": false
    };

    request(app)
      .post('/api/products')
      .send(requestBody)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('object');
        // expect(res.body.message).to.equal('Hello, John!');
        done();
      });
  });


    // Test POST /api/data with valid data
    it('should return a singup message on POST /api/data', (done) => {

      done()
      // const requestBody = {
      //   "name": "Rishi Test",
      //   "email": "Rishi1@gmail.com",
      //   "password": "1234"
      // };
  
      // request(app)
      //   .post('/api/users/register')
      //   .send(requestBody)
      //   .expect(200)
      //   .end((err, res) => {
      //     console.log(res.body);
      //     if (err) return done(err);
      //     expect(res.body).to.be.an('object');
      //     // expect(res.body.message).to.equal('Hello, John!');
      //     done();
      //   });
      
    });


  // Test POST /api/data with missing name
  it('should return an error if name is not provided on POST /api/data', (done) => {

  const requestBody = {
    "name":"rishi",
    "email": "Rishi4@gmail.com",
    "password": "1234"
  };

  request(app)
    .post('/api/users/register')
    .send(requestBody)
    .expect(400)
    .end((err, res) => {
      if (err) {
      console.log(res.body)
        return done(err)
      };
      expect(res.body).to.be.an('object');
      // expect(res.body.message).to.equal('Hello, John!');
      done();
    });

  //   request(app)
  //     .post('/api/data')
  //     .send({})
  //     .expect(400)
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res.body).to.be.an('object');
  //       expect(res.body.error).to.equal('Name is required');
  //       done();
  //     });


  });

});
