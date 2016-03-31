import angular from 'angular';
import uiRouter from 'angular-ui-router';

import aboutComponent from './about.component';

let aboutModule = angular.module('about', [uiRouter])
                            .config(config)
                            .component('about', aboutComponent);

function config($stateProvider, $urlRouterProvider) {
    "ngInject";
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('about', {
            url: '/about',
            template: '<about></about>'
        });
}

export default aboutModule;