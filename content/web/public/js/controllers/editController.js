'use strict';

angular.module('contactApp.controllers.edit', ['contactApp.services']).
    controller('contactEditCtrl', ['$scope', '$location', '$routeParams', 'contactStorage', function($scope, $location, $routeParams, contactStorage){
    $scope.contact = {};
    $scope.id = $routeParams.id || null;
    
    $scope.init = function(){
            contactStorage.get().then(function(response){
                contactStorage.contacts = response.result;
                $scope.contacts = contactStorage.contacts;
            });
        }
     
      if(contactStorage){
            $scope.init();
        }
        
        contactStorage.register($scope.init);
        
    if (!($scope.id === undefined)){
        $scope.contact = _.findWhere(contactStorage.contacts, {"identity": parseInt($scope.id, 10)})
        if ($location.path().split('/')[1] == 'contact'){
            $scope.view = {};
            $scope.pageName = "View contact";
        }
    }
    
    $scope.save = function(){
        contactStorage.save($scope.contact);
        $location.path('/');
    };
    
    $scope.cancel = function(){
        $location.path('/');
    }
    
  }]);
