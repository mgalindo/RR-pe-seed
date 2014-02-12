'use strict';
// Testing various forms of tests that cause the application environment to break.

describe("Testing the tests of tests", function(){
    beforeEach(module('contactApp.services.remote', function($provide){
        //Remove these to break.
        $provide.value("core", {})
        $provide.value("user", {})
        $provide.value("log", {})
    }));
    beforeEach(inject(function(){
    
    }));
    it('should just work', function(){
        console.log('DEBUGGING: IGNORE THE TEST PRINTING THIS');
    })
});
