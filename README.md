# About

This is a fork of [Angular Seed](https://github.com/angular/angular-seed) but with changes needed for requireJS support.

* AngularJS 1.2.19
* RequireJS 2.1.9

## Changes 

* Stripped away all tests
* Added a base url within main.js
* Added cdn for angular 
* Added jquery 2.1.1
* Created a basic bolierplate to start off your angular/require app that requires routes

## Directory Layout

    app/                --> all of the files to be used in production
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        bootstrap.js    --> fires off the require app
        lib/            --> angular and 3rd party javascript libraries
          require.js    --> require js
          domready.js   --> require script to ensure dom is ready
          angular.js    --> uncompressed, backup version to CDN (Content Delievry Network)
          angular-route.js --> uncompressed, backup version to CDN (Content Delievry Network)
          jqueyr.min.js --> compressed, backup version to CDN CDN (Content Delievry Network)
        controllers/    --> contains the basic controllers for our app
          index.js      --> used to load the controllers
          module.js     --> used to define controllers for the controllers
          my-ctrl-1.js  --> angular controller
          my-ctrl-2.js  --> angular controller 
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

## Contact

For more information on AngularJS please check out http://angularjs.org/

For more information on RequireJS please visit http://requirejs.org/
