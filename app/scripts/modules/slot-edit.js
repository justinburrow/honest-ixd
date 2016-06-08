/* globals angular:false */
'use strict';

var app = angular.module('slotEdit', []);

app.controller('slotEditCtrl', function() {
  var vm = this;
  vm.edit = false;

  vm.selectedItems = [{'id': 5}, {'id': 6}, {'id': 7}, {'id': null}, {'id': null}, {'id': null}];

  vm.availableItems = [{'id': 0, 'name': 'Space Traveling', 'image_url': 'space-traveling.jpg', 'selected': false}, {'id': 1, 'name': 'Painted Feathers', 'image_url': 'painted-feathers.jpg', 'selected': false}, {'id': 2, 'name': 'Stars & Stripes', 'image_url': 'stars-and-stripes.jpg', 'selected': false}, {'id': 3, 'name': 'Eiffel Tower Stripe', 'image_url': 'eiffel-tower-stripe.jpg', 'selected': false}, {'id': 4, 'name': 'Macarons', 'image_url': 'macarons.jpg', 'selected': false}, {'id': 5, 'name': 'Race Cars', 'image_url': 'race-cars.jpg', 'selected': false}, {'id': 6, 'name': 'Luggage', 'image_url': 'luggage.jpg', 'selected': false}, {'id': 7, 'name': 'T-Rex', 'image_url': 't-rex.jpg', 'selected': false}, {'id': 8, 'name': 'Bananas', 'image_url': 'bananas.jpg', 'selected': false}, {'id': 9, 'name': 'Green Snakes', 'image_url': 'green-snakes.jpg', 'selected': false}];

  vm.addItem = function(item) {
    if ( vm.edit ) {
      if ( !item.selected ) {
        var firstEmpty = vm.selectedItems.findIndex((selected) => !selected.id);
        if (firstEmpty > -1) {
          vm.selectedItems[firstEmpty].id = item.id;
          item.selected = true;
        } else {
          console.log('all full!');
        }
      } else {
        item.selected = null;
        var selectedItem = vm.selectedItems.findIndex((selected) => selected.id === item.id);
        vm.selectedItems[selectedItem].id = null;
      }
    }
  };

});
