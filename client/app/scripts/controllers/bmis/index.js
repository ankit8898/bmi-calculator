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
    $scope.user = {name: null,email: null};

    $scope.submit = function(user) {
       console.log('Doing Login for', user.email)
    }
  });
