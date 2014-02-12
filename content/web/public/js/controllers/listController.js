'use strict';

angular.module('contactApp.controllers.list', ['contactApp.services']).
    controller('contactListCtrl', ['$scope', 'contactStorage', function($scope, contactStorage) {
        $scope.contacts = [];
        $scope.init = function(){
            contactStorage.get().then(function(response){
                contactStorage.contacts = response.result;
                console.log("init is being called")
                $scope.contacts = contactStorage.contacts;
            });
        }
        $scope.delete = function(name){
            contactStorage.delete(name);
        };
        
        if(contactStorage){
            $scope.init();
        }
        
        contactStorage.register($scope.init);
    }]);
