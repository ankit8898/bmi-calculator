'use strict';

describe('Service: bmi', function () {

  // load the service's module
  beforeEach(module('bmiCalculatorApp'));

  // instantiate service
  var bmi;
  beforeEach(inject(function (_bmi_) {
    bmi = _bmi_;
  }));

  it('should do something', function () {
    expect(!!bmi).toBe(true);
  });

});
