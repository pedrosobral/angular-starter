import angular from 'angular';
import AppComponent from './app.component';

let app = angular
    .module('app', [])
    .component('app', AppComponent);

angular.bootstrap(document.body, ['app']);

export default app;
