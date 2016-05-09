const chai = require('chai');
const expect = chai.expect;
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const request = chai.request;
const mongoose = require('mongoose');
process.env.MONGO_URI = 'mongodb://localhost/animals_test_db';
require(__dirname + '/../server');

describe('the GET method', () => {
  it('should list all animals', (done) => {
    request('localhost:7777')
    .get('/animals')
    .end((err, res) => {
      expect(err).to.eql(null);
      console.log(res.body);
      expect(Array.isArray(res.body)).to.eql(true);
      expect(res.body.length).to.eql(0);
      done();
    })
  })
})
describe('the POST and GET by name and DELETE methods', () => {
  after((done) => {
    mongoose.connection.db.dropDatabase( () => {
      done();
    })
  })
  it('should make and animal to the dataBase', (done) => {
    request('localhost:7777')
    .post('/animals')
    .send({name:'cake', type:'cat'})
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.name).to.eql('cake');
      expect(res.body.type).to.eql('cat');
      done();
    })
  })
  it('should find an animal by its name', (done) => {
    request('localhost:7777')
    .get('/animals/cake')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.length).to.eql(1);
      expect(JSON.stringify(res.body).slice(43,47)).to.eql('cake');
      done();
    })
  })
  it('should update an animal based off of its name', (done) => {
    request('localhost:7777')
    .put('/animals/cake')
    .send({name:'jake', type:'the dog'})
    .end((err, res) => { // eslint-disable-line
      request('localhost:7777')
      .get('/animals/jake')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(JSON.stringify(res.body).slice(43,47)).to.eql('jake');
        expect(JSON.stringify(res.body).slice(57,64)).to.eql('the dog');
        done();
      })
    })
  })
  it('should delete an animal from the db by its name', (done) => {
    request('localhost:7777')
    .delete('/animals/jake')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      done();
    })
  })
})
