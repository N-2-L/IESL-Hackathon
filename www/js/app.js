// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('Electricity Usage', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  //$urlRouterProvider.otherwise('/');

  //$stateProvider.state('start', {
  //  url: '/',
  //  templateUrl: 'partials/home.html',
  //  controller: 'DataEntryCtrl'
  //})
  //  .state('scores', {
  //    url: '/scores',
  //    templateUrl: 'partials/history.html',
  //    controller:'ScoreSheetCtrl'
  //
  //  })

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "partials/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "partials/home.html"

        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'facts-tab': {
          templateUrl: "partials/history.html",
          controller:'ScoreSheetCtrl'
        }
      }
    })
    .state('tabs.settings', {
      url: "/settings",
      views: {
        'settings-tab': {
          templateUrl: "partials/settings.html"
        }
      }
    });


  $urlRouterProvider.otherwise("/tab/home");

});

//
//$stateProvider
//  .state('tabs', {
//    url: "/tab",
//    abstract: true,
//    templateUrl: "templates/tabs.html"
//  })
//  .state('tabs.home', {
//    url: "/home",
//    views: {
//      'home-tab': {
//        templateUrl: "templates/home.html",
//        controller: 'HomeTabCtrl'
//      }
//    }
//  })
//  .state('tabs.facts', {
//    url: "/facts",
//    views: {
//      'home-tab': {
//        templateUrl: "templates/facts.html"
//      }
//    }
//  })
//  .state('tabs.facts2', {
//    url: "/facts2",
//    views: {
//      'home-tab': {
//        templateUrl: "templates/facts2.html"
//      }
//    }
//  })
//  .state('tabs.about', {
//    url: "/about",
//    views: {
//      'about-tab': {
//        templateUrl: "templates/about.html"
//      }
//    }
//  })
//  .state('tabs.navstack', {
//    url: "/navstack",
//    views: {
//      'about-tab': {
//        templateUrl: "templates/nav-stack.html"
//      }
//    }
//  })
//  .state('tabs.contact', {
//    url: "/contact",
//    views: {
//      'contact-tab': {
//        templateUrl: "templates/contact.html"
//      }
//    }
//  });
//
//
//$urlRouterProvider.otherwise("/tab/home");

