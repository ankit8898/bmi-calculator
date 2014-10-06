'use strict';

/**
 * @ngdoc service
 * @name bmiCalculatorApp.bmi
 * @description
 * # bmi
 * Service in the bmiCalculatorApp.
 */
angular.module('bmiCalculatorApp')
  .service('Bmi', function Bmi(Restangular) {

  	var baseUrl = 'http://localhost:3000/bmis'
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.foo = function(){
    	var v = Restangular.all('api/v1/bmis')
    	v.getList().then(function(acc){
    		console.log(acc)
    	})
    	console.log('Heyyllll')
    }
  });
