var angular = require('angular');
var AppComponent = require('./app.component.js');

angular
    .module('app', [])
    .component('app', AppComponent );

angular.bootstrap(document.body, ['app']);
