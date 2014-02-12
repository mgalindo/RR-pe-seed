'use strict';
/*
TODO:
    Modules cannot be pulled in without a mocked log and the controller cannot be instantiated without a mocked apiProvider however injecting the mocks does not allow for modules to be registered afterwards.**fixed
    Solution:
        Commented out initialization code in controller.<- This may work with the following
        Mocked logs.
        Mocked service factory
        Assigned controller mocked service factory
        Manually called initialization function in controller
*/
var log, rootScope, mocks, ctrl, scope, timeout, contacts, contactStorage, controller;
describe('Controller', function(){

// Should not be necessary to define a whole service
//    beforeEach(function(){
//        angular.module('cai.services', []).
//        factory('apiProvider', ['$q', '$timeout', function($q, $timeout){
//            return {
//                callFunction: function(name, params){
//                    var deferred = $q.defer();
//                    $timeout(function(){
//                        deferred.resolve({'result': ["huzzah"]});
//                    }, 1000); 
//                    return deferred.promise;
//                }
//            }
//        }])
//    });
    beforeEach(module('contactApp'));
    beforeEach(module('contactApp.controllers.list', function($provide){
        mocks = {
            mockapiProvider: {
                get: function(){
                    
                }
            },
            mocklog: {
                error: sinon.spy(),
                info: sinon.spy(),
                debug: sinon.spy()
            }
        }
        $provide.value("log", mocks.mocklog);
    }));
    
    beforeEach(inject(function($rootScope, $q, $timeout){
        contacts = [{
            "name": "Bobby",
            "address": "Valley Dr",
            "number": 555,
            "identity": 0,
        }]
        
        contactStorage = {            
            // Clean up here and in real service
            callers: [],
            fire: function(){
                    angular.forEach(this.callers, function(caller){
                        caller();
                    });
            },
            register: function(caller){
                    this.callers.push(caller);
                },
            contacts: contacts,
            get: function(){
                var deferred = $q.defer();
                $timeout(function(){
                    deferred.resolve({result:contacts});
                }, 1000);
                return deferred.promise;
            },
            delete: function(obj){
                var deferred = $q.defer();
                $timeout(function(){
                    deferred.resolve({result:contacts});
                }, 1000)
                this.contacts = _.without(this.contacts, _.findWhere(this.contacts, obj));
                console.log(this.callers)
                this.fire();
                return deferred.promise;
            },
            save: function(){}
        }
        
        //Inject Angular services
        timeout = $timeout;
        // Timeout.flush mimics a wait period for before promise resolution
        rootScope = $rootScope;
        scope = rootScope.$new();
    }));

    it('all should exist', inject(function($controller){
        var ctrlList = $controller('contactListCtrl', {
            $scope: scope,
            contactStorage: contactStorage
        });
        
        var ctrlEdit = $controller('contactEditCtrl', {
            $scope: scope,
            $routeParams: {},
            contactStorage: contactStorage
        });
        
        expect(ctrlList).toBeDefined();
        expect(ctrlEdit).toBeDefined();
    }));
    
    describe('contactListCtrl', function(){
        beforeEach(inject(function($controller){
            ctrl = $controller('contactListCtrl', {
                $scope: scope,
                contactStorage: contactStorage
            });
            scope.init();
        }));
        
        it('should start with empty contacts and then later resolve to have contacts (data)', function(){
            expect(_.isEmpty(scope.contacts)).toBe(true);
            timeout.flush();
            expect(scope.contacts).toBe(contactStorage.contacts)
        });
        
        it('should correctly call delete', function(){
            timeout.flush();
            var length = scope.contacts.length;
            scope.delete(0);
            expect(scope.contacts.length).toEqual(length-1);
        });
    })
});
