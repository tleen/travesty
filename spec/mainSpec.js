var main = require('../lib/main.js');

describe("main tests", function(){
  it('should equal "Hello World"', function(){
    expect(main.hello()).toEqual('Hello World');
  });
});
