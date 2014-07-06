/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    baseUrl : 'js/',
    paths: {
        'angular': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.min', 'lib/angular'],
        'angular-route': ['https://code.angularjs.org/1.2.19/angular-route.min', 'lib/angular-route'],
        'domReady': 'lib/domReady', 
        'bootApp' : 'bootstrap', 
        'jquery' : ['http://code.jquery.com/jquery-2.1.1.min', 'lib/jquery.min']
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular', 
            deps: ['jquery']
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        'bootApp'
    ]
});
