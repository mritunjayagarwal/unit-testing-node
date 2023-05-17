var chai = require('chai');
var asserts = chai.assert;
var should = chai.should();
var expect = chai.expect;

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../app');

describe('Test User Api', function(done){
  it('get user', function(done){
    chai.request(server)
    .get('/user')
    .end((err, response) => {
      console.log(response.text);
      expect(response.text).to.be.equal("Hello");
      done();
    })
  })
  it('get user status', function(done){
    chai.request(server)
    .get('/user')
    .end((err, response) => {
      expect(response.status).to.be.equal(200);
      done();
    })
  })
})