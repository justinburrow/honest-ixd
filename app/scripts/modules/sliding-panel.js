/* globals angular:false */
'use strict';

var app = angular.module('slidingPanel', []);

app.controller('slidingPanelCtrl', function($window) {
  var vm = this;
  var resizeTimer;
  vm.edit = false;

  /* Shut down all CSS transitions on resize- turn back on 250ms when resize is over */
  angular.element($window).resize(function() {
    var b = angular.element('body');
    clearTimeout(resizeTimer);
    b.addClass('no-transition');
    resizeTimer = setTimeout(function() {
      b.removeClass('no-transition');
    }, 250);
  });

});
