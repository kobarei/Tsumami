(function() {
  'use strict';
  var app;

  app = angular.module('VolumeHub', []);

  app.controller("PopupController", function($scope) {
    chrome.storage.sync.get('myset', function(obj) {
      return $scope.$apply(function() {
        return $scope.volumeVal = obj.myset;
      });
    });
    return $scope.save = function() {
      return chrome.storage.sync.set({
        myset: $scope.volumeVal
      });
    };
  });

}).call(this);
