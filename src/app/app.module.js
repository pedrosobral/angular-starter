var angular = require('angular');
var AppComponent = require('./app.component.js');

var app = angular
    .module('app', [])
    .component('app', AppComponent);

angular.bootstrap(document.body, ['app']);

module.exports = app;
