process.env.NODE_ENV = 'test';




// import chaiHttp from "chai-http";


// import {expect, use} from "chai"
// import axios from "axios";
import supertest from "supertest";
// import chai-http from "chai-http"

// const server = use(chaiHttp)

// chai.use(chaiHttp);


// import {expect} from 'chai'
// import chaiHttp from 'chai-http';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();


const expect = chai.expect;
// var req = require('supertest');

const app = require("./../src/server")

let server;


describe.skip('Testing Product API', () => {
    // before(done => {
    //     app.on("app_started", function () {
    //         done()
    //     })
    // })

    // after(done => {
    //     app.close(done);
    // });

    it('Simple add test cases', async () => {


        // req(app)
        // .get('/home')
        // .end(function (res) {
        //     expect(res.status).to.equal(200);
        //     done();
        // })

        // Arrange 
        // Action
        // Assert


        const result = await supertest(app).get('/home');
        // // const result = await axios.get();
        console.log(result.data)
        // expect(result.statusCode).to.equal(200)
        // expect(result.data).to.be.an('object')

        //     app
        //     .get('/book')
        //     .end((err, res) => {
        //           res.should.have.status(200);
        //         //   res.body.should.be.a('array');
        //         //   res.body.length.should.be.eql(0);
        //       done();
        // });

        expect(1).to.equal(1)

    })

})