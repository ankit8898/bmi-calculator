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

  	//var baseUrl = 'http://localhost:3000/bmis'
    var baseUrl = Restangular.all('api/v1/bmis')
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.all = function(){	
    	return baseUrl.getList();
    }

    this.submit = function(bmi){
      var params = {bmis: {height: bmi.height,weight: bmi.weight}}
      return baseUrl.post(params);
    }
  });
