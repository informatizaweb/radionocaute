// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])


.directive("navigateTo",function($ionicGesture) {

  return {
    restrict: 'A',
    link:function ($scope,$element,$attr) {

      var tapHandler = function(e) {
        var inAppBrowser = window.open(encodeURI($attr.navigateTo),'_blank','location=no','toolbar=no');
      };
      var tapGesture = $ionicGesture.on('tap',tapHandler,$element);
      $scope.on('$destroy',function(){
        $ionicGesture.off(tapGesture,'tap',tapHandler);
      });
    }
  }
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    var notificationOpenedCallback = function(jsonData) {
    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal.init("bfa4733b-de66-4787-ab6e-7d398517825a",
                                 {googleProjectNumber: "1092035415901"},
                                 notificationOpenedCallback);
  
  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
  

    var push = new Ionic.Push({
      "debug": true
    });

    push.register(function(token) {
      console.log("Device token:",token.token);
    });
    
  });
})


.controller("ExampleController", function($scope, $cordovaMedia, $ionicLoading) {

    $scope.play = function(src) {
        var media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
    }

    var mediaStatusCallback = function(status) {
        if(status == 1) {
            $ionicLoading.show({template: 'Carregando...'});
        } else {
            $ionicLoading.hide();
        }
    }

});

