const { assert } = require('chai');
const { describe, it, afterEach } = require('mocha');
const mongoose = require('mongoose');
const sinon = require('sinon');
const db = require('../db');

describe('Database', () => {
  const sinonBox = sinon.createSandbox();

  afterEach(() => {
    db.close();
    sinon.reset();
  });
  describe('Connection', () => {
    describe('Sucess cases', () => {
      it('Should connect database sucessfully', async () => {
        const loggerSpy = sinonBox.spy(console, 'log');

        await db.connect();

        sinonBox.assert.calledOnceWithExactly(
          loggerSpy,
          '[MongoDB] Database connected!'
        );
      });
    });
    describe('Error case', () => {
      it('Should log error trying to connect ', async () => {
        const errorMock = new Error('Error connecting!');
        sinonBox
          .stub(mongoose, 'connect')
          .callsFake(() => Promise.reject(errorMock));
        sinonBox.stub(process, 'exit');
        process.exit.callsFake(() => false);

        const loggerSpy = sinonBox.spy(console, 'error');
        try {
          await db.connect();
        } catch (error) {
          sinonBox.assert.calledOnceWithExactly(loggerSpy, errorMock);
          assert.isNotOk(error);
        }
      });
    });
  });
});
