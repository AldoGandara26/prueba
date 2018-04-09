angular.module('ionicApp', ['ionic'])

.controller('AppCtrl', function($scope, $ionicPopup, $timeout) {
  $scope.count = 0;
  
  $scope.showLoginPopup = function () {
   var myPopUp= $ionicPopup.show({
                template: '<div class="bar bar-header bar-calm">Login</div><ion-input><ion-label>Username&nbsp:</ion-label><input type="text" value=""></ion-input><ion-input><ion-label>Password&nbsp:</ion-label><input type="password" value=""></ion-input><button class="button  button-full button-balanced" ng-click="showSignUpPopup()" >Submit</button><button close class="button  button-full button-assertive" ng-click="showSignUpPopup()" >Cancel</button>',
                scope: $scope,
                
    });
  };
  
 
  
  $scope.showLogin1Popup = function () {
   var myPopup=$ionicPopup.show({
     template:'<div class="bar bar-header bar-calm"> <h1 class="title">Login</h1></div><ion-input><ion-label>Username&nbsp:</ion-label><input type="text" value=""></ion-input><ion-input><ion-label>Password&nbsp:</ion-label><input type="password" value=""></ion-input>',
 scope:$scope,
     buttons:[{
     type:'button button-balanced',
     text:'Login'
   },
     {
     type:'button button-assertive',
     text:'Cancel'
   }
     ]
   });
  };

  $scope.showSignUpPopup = function () {
   
    }
  
})