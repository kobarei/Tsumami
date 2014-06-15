(function() {
  'use strict';
  var app;

  app = angular.module('VolumeHub', []);

  app.controller("OptionsController", function($scope) {
    console.log('\'Allo \'Allo! Option');
    return chrome.storage.sync.set({
      "default": 0.1
    });
  });

}).call(this);
