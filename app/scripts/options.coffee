'use strict';

app = angular.module('VolumeHub',[])
app.controller "OptionsController", ($scope) ->

  console.log('\'Allo \'Allo! Option')
  chrome.storage.sync.set {
      default: 0.1
    }
