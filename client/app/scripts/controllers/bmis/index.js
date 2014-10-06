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

    function loadBmis(){
    	Bmi.all().then(function(result){
    		$scope.bmis = result;
    	});
    }
    $scope.submit = function(bmi) {
       Bmi.submit(bmi).then(function(data){
       	//$scope.bmis.push(data)
       })
       $scope.bmis.push(bmi)
       $scope.bmi = {};
    }

    loadBmis();
  });
