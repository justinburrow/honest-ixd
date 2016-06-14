/* globals angular:false */
'use strict';

var app = angular.module('textUpdate', ['ngAnimate']);

app.controller('textUpdateCtrl', function($scope) {
  var vm = this;
  
  vm.testValue = 12.99;
  
  vm.updateValue = function() {
    vm.updating = true;
    setTimeout( function() {
      vm.testValue = vm.updatedValue;
      vm.updatedValue = '';
      vm.updating = false;
      $scope.$apply();
    }, 200);
    
  };
});
