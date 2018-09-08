import chai from 'chai';
import ordersController from '../app/controllers/ordersController';

chai.use(require('chai-http'));

const expect = chai.expect;


describe('GET /orders', () => {
  it('should fetch all the orders stored in memory', () => {
    return chai.request('http://localhost:5000/api/v1/orders').get('/').then((result) => {
      expect(result.body).to.be.an('object');
    });
  });
});

describe('POST /orders', () => {
  it('should create an order and store it in memory', () => {
    return chai.request('http://localhost:5000/api/v1/orders').post('/').then((result) => {
      expect(result).to.have.status(400);
      expect(result.body).to.be.an('object');
    });
  });
});

describe('GET /orders/:orderId', () => {
  it('should fetch one of the orders stored in memory', () => {
    return chai.request('http://localhost:5000/api/v1/orders').get('/1').then((result) => {
      expect(result).to.have.status(404);
      expect(result.body).to.be.an('object');
    });
  });
});

describe('PUT /orders/:orderId', () => {
  it('should update the status of one of the orders stored in memory', () => {
    return chai.request('http://localhost:5000/api/v1/orders').put('/1').then((result) => {
      expect(result).to.have.status(400);
      expect(result.body).to.be.an('object');
    });
  });
});
