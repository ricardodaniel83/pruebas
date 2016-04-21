// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform,$http) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    } 
  });
  var defaultHTTPHeaders = {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  };
  $http.defaults.headers.post = defaultHTTPHeaders;

})


.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
       .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })
      .state('app.home', {
          url: '/home',
          views: {
            'menuContent': {
              templateUrl: 'templates/home.html',
              controller: 'HomeCtrl'
            }
          }
      })
      .state('app.listPropuesta', {
          url: '/listPropuesta/:taxonomy',
          views: {
            'menuContent': {
              templateUrl: 'templates/listPropuesta.html',
              controller: 'ListPropCtrl'
            }
          }
      })
      .state('app.listTaxonomies', {
          url: '/listTaxonomies',
          views: {
            'menuContent': {
              templateUrl: 'templates/taxonomies/lists.html',
              controller: 'TaxListCtrl'
            }
          }
      })

      .state('app.saveTaxonomies', {
          url: '/saveTaxonomies',
          views: {
            'menuContent': {
              templateUrl: 'templates/taxonomies/save.html',
              controller: 'TaxFormCtrl'
            }
          }
      })

      .state('app.updateTaxonomies', {
          url: '/updateTaxonomies/:id',
          views: {
            'menuContent': {
              templateUrl: 'templates/taxonomies/update.html',
              controller: 'TaxUpdCtrl'
            }
          }
      })


    $urlRouterProvider.otherwise("/app/home");

})


/****************** FILTROS **************************/
.filter('cortarTexto', function(){
  return function(input, limit){
    return (input.length > limit) ? input.substr(0, limit)+'...' : input;
  };
})
