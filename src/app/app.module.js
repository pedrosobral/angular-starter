import angular from 'angular';

import angularUIRouter from 'angular-ui-router';
import routes from './app.config';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import './material-icons.css';  // material-icons

import AppComponent from './app.component';

let app = angular
    .module('app', [angularUIRouter, angularMaterial ])
    .component('app', AppComponent)
    .config(routes);

angular.bootstrap(document.body, ['app']);

export default app;
