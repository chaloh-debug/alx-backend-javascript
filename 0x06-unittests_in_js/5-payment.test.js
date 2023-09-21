const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let toTest;

  beforeEach(() => {
    if (!toTest) {
      toTest = sinon.spy(console);
    }
  });

  afterEach(() => {
    toTest.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(toTest.log.calledWith('The total is: 120')).to.be.true;
    expect(toTest.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(toTest.log.calledWith('The total is: 20')).to.be.true;
    expect(toTest.log.calledOnce).to.be.true;
  });
});