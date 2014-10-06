'use strict';

/**
 * @ngdoc function
 * @name bmiCalculatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bmiCalculatorApp
 */
angular.module('bmiCalculatorApp')
  .controller('BmiCtrl', function ($scope,Bmi) {
    $scope.bmi = {};

    $scope.bmis = [];
    $scope.submit = function(bmi) {
       Bmi.foo()
       $scope.bmis.push(bmi)
       $scope.bmi = {};
    }
  });
