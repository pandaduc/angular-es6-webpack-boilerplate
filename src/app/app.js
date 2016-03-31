import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Common from './common';
import Components from './components';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter,
    Components.name
]);

angular
    .module('app')
    .component('app', AppComponent);