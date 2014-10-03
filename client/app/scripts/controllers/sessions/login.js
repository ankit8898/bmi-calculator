'use strict';

/**
 * @ngdoc function
 * @name bmiCalculatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bmiCalculatorApp
 */
angular.module('bmiCalculatorApp')
  .controller('SessionCtrl', function ($scope,$state) {
    $scope.user = {name: null,email: null};

    $scope.submit = function(user) {
       console.log('Doing Login for', user.email)
       $state.go('bmi')
    }
  });
