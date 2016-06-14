/* globals angular:false */
'use strict';
var app = angular.module('mobileModal', []);

app.controller('mobileModalCtrl', function() {
  var vm = this;
  
  vm.modalOpen = function() {
    angular.element('.overlay').addClass('overlay--shown');
  };

  vm.modalClose = function() {
    angular.element('.overlay').removeClass('overlay--shown');
  };
});
