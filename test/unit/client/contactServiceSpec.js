//'use strict';


///*
//TODO:
//    Same as with contactControllerSpec tests. Needs successful mocking of imported (injected) services. Uncomment these tests when controller tests are working.
//*/
// 
//describe('contactApp.services.remote', function(){

//    var mocklog, apiProvider, rootScope, scope, remoteStorage, q, log, alwaysPromising, initialized, 
//    promD = new Object();
//    
//    beforeEach(module('contactApp.services.remote', function($provide){
//        mocklog = {
//            // Logs aren't working for me
//            info: function(message){console.log("INFO: " + message)},
//            debug: function(message){console.log("DEBUG " + message)}
//        }
//        
//        apiProvider = {
//            callFunction: function(name, params){
//                var fakePromise = new Promise();
//                return fakePromise;
//            }
//        }
//        $provide.value('log', mocklog)
//        $provide.value('$log', mocklog)
//        $provide.value('apiProvider', apiProvider)
//        
//        spyOn(apiProvider, 'callFunction')
//    }));
//    
//    beforeEach(inject(function($injector, $rootScope, $q){
//       q = $q;
//       rootScope = $rootScope;
//       scope = $rootScope.$new();
//       remoteStorage = $injector.get('remoteStorage');
//    }));
//    
//    
//    describe('remoteStorage', function(){
//        it('should exist', function(){
//           expect(remoteStorage).toBeDefined();
//        });
//        
//        it('should call to apiProvider', function(){
//            remoteStorage.get();
//            expect(apiProvider.callFunction).toHaveBeenCalledWith('getContacts', {"filter": {}, "options": {}});
//            remoteStorage.get({"name":"Roberto"})
//            expect(apiProvider.callFunction).toHaveBeenCalledWith('getContacts', {"filter": {"name":"Roberto"}, "options": {}});
//            
//        it('should ')
//        });
//        
//        
//    });
//});
