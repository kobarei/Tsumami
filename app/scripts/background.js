(function() {
  'use strict';
  chrome.runtime.onInstalled.addListener(function(details) {
    return console.log('previousVersion', details.previousVersion);
  });

  chrome.storage.sync.get('myset', function(obj) {
    var val;
    val = obj.myset;
    return chrome.browserAction.setBadgeText({
      text: val
    });
  });

  console.log('\'Allo \'Allo! Event Page for Browser Action');

}).call(this);
