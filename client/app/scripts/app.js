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
    'ui.router',
    'restangular'
  ])
  .config(function ($stateProvider, $urlRouterProvider,RestangularProvider,$httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = angular.element(document.querySelector('meta[name=csrf-token]')).attr('content')
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $urlRouterProvider.otherwise("/login");
    $stateProvider
      .state('login', {
        url:        '/login',
        templateUrl: 'views/session/login.html',
        controller: 'SessionCtrl'
      })
      .state('bmi', {
        url:        '/bmis',
        templateUrl: 'views/bmis/index.html',
        controller: 'BmiCtrl'
      })
  });
