'use strict';

/**
 * @ngdoc function
 * @name bmiCalculatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bmiCalculatorApp
 */
angular.module('bmiCalculatorApp')
  .controller('BmiCtrl', function ($scope) {
    $scope.bmi = {};

    $scope.bmis = [];
    $scope.submit = function(bmi) {
       $scope.bmis.push(bmi)
       $scope.bmi = {};
    }
  });
