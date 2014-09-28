var app = angular.module('BloodSite');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'RnWDQJAoopXddqR12B2rpLVxlXra2Z6XyOwoy6BJ', 'X-Parse-REST-API-Key': 'kFMsQgevLapW9EVYXwSZqjnJ2PkqKgU4INHf19gh'}
      return config;
    }
  };
});

