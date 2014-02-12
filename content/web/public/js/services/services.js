'use strict';

/* Services */


/*
    Pushing contacts unfortunately does not properly update everything needed for controller so we will need to use some of the returned data before appending to list.
    
*/
angular.module('contactApp.services', ['contactApp.services.remote']).
    factory('contactStorage', ['$rootScope', 'remoteStorage', function($rootScope, remoteStorage){
        var contacts;
        return {
                callers: [],
                register: function(caller){
                    this.callers.push(caller)
                },
                fire: function(){
                    angular.forEach(this.callers, function(caller){
                        caller();
                    })
                },
                contacts: contacts,
                get: function(){
                    return remoteStorage.get();
                },
                save: function(contactObj){
                    if(contactObj._id === undefined){
                        var lastId = _.max(this.contacts, function(contact){
                            return contact.identity
                        });
                        
                        var id;
                        if (!(lastId == -Infinity)){
                            id = lastId.identity + 1;
                        }
                        else { 
                            id = 0;
                        }
                        
                        var data = {
                            name: contactObj.name,
                            address: contactObj.address,
                            number: contactObj.number,
                            identity: id
                        }
                    }
                    else {
                        var data = contactObj;
                    }
                    remoteStorage.save(data);
                    // Out with the old;
                    this.fire();
                },
                delete: function(obj){
                    remoteStorage.remove(obj);
                    this.fire();
                }
            }
}]);
