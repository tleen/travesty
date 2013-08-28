var main = require('../lib/main.js');

describe("main tests", function(){
  it('should equal "Hello World"', function(){
    expect(main.hello()).toBe('Hello World');
  });

  it('should also equal "Hello World"', function(){
    expect(main.hello()).not.toBe('Fail');
  });
});
