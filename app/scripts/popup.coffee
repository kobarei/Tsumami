'use strict';

app = angular.module('VolumeHub',[])
app.controller "PopupController", ($scope) ->
  chrome.storage.sync.get 'myset', (obj) ->
    $scope.$apply () ->
      $scope.volumeVal = obj.myset

  $scope.save = () ->
    chrome.storage.sync.set { myset: $scope.volumeVal }
    chrome.browserAction.setBadgeText { text: $scope.volumeVal }
