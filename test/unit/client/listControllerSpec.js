'use strict';


describe('List Controller', function() {
    var mocks = {};
    var expect = chai.expect,
        should = chai.should();

    beforeEach(module('ngCookies'));
    beforeEach(module('ngRoute'));
    beforeEach(module('cai.services'));
    beforeEach(module('contactApp'));
    beforeEach(module('contactApp.controllers.list'));
    beforeEach(module('contactApp.services'));

    describe('display', function() {
        var env = {};

        var scope, ctrl;
        beforeEach(inject(function($rootScope) {
            scope = $rootScope.$new();
            inject(function($controller, apiProvider){
                ctrl = $controller('contactListCtrl', {
                    $scope: scope
                });
            });
        }));

        it('should exist', function() {
            ctrl.should.exist;
        });

//        it('should display message', function() {
//            scope.message.should.exist;
//            scope.message.should.equal('Hello world');
//        });
//
//        it('should have data from service', function() {
//            expect(scope.dataFromService).not.to.be.undefined;
//        });
//
//        it('should have data from REST', function() {
//            expect(scope.dataFromREST).not.to.be.undefined;
//        });

    });
});



