'use strict';

/**
 * @ngdoc overview
 * @name bmiCalculatorApp
 * @description
 * # bmiCalculatorApp
 *
 * Main module of the application.
 */
angular
  .module('bmiCalculatorApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
