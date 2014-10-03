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
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
      .state('login', {
        url:        '/login',
        templateUrl: 'views/session/login.html',
        controller: 'SessionCtrl'
      })
      .state('bmi', {
        url:        '/bmi',
        templateUrl: 'views/bmis/index.html',
        controller: 'BmiCtrl'
      })
  });
