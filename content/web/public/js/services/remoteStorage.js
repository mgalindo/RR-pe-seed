'use strict';

/*
TODO:
    Not much. In fact, this module may not even be all that necessary. Best to mock records.js from Project-Evo instead of writing any by hand.
*/
angular.module('contactApp.services.remote', ['cai.services']).
    factory('remoteStorage', function($log, apiProvider){
        return {
            get: function(filter, options){
                var filter = filter || {},
                options = options || {};
                return apiProvider.callFunction('getContacts', {"filter":filter, "options":options});
            },
            save: function(data){
                return apiProvider.callFunction('saveContact', data);
            },
            remove: function(data){
                return apiProvider.callFunction('removeContact', data);
            },
        }
    });
