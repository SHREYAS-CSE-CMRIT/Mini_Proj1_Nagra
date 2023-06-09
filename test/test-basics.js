var assert = require('assert'),
http = require('http');

var server = require('../app.js');

describe('/', function () {

  it('should return passed', function (done) {
     var result=5*3;
      assert.equal(result,15);
      done();
  });

  it('should return 200', function (done) {
    http.get('http://127.0.0.1:8080/', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });



  it('should return "Hello World!"', function (done) {
    http.get('http://127.0.0.1:8080/', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.equal('Hello World!', data);
        done();
      });
    });
  });
});
