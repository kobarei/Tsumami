(function() {
  'use strict';
  chrome.runtime.onInstalled.addListener(function(details) {
    return console.log('previousVersion', details.previousVersion);
  });

  chrome.browserAction.setBadgeText({
    text: '\'Allo'
  });

  console.log('\'Allo \'Allo! Event Page for Browser Action');

  console.log(chrome.storage.sync);

}).call(this);
