import angular from 'angular';
import AppComponent from './app.component';

var app = angular
    .module('app', [])
    .component('app', AppComponent);

angular.bootstrap(document.body, ['app']);

export default app;
