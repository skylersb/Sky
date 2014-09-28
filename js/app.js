var app = angular.module('BloodSite', ['textAngular']);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});



