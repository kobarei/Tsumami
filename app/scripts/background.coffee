'use strict';

chrome.runtime.onInstalled.addListener (details) ->
    console.log('previousVersion', details.previousVersion)

chrome.storage.sync.get 'myset', (obj) ->
  val = obj.myset
  chrome.browserAction.setBadgeText({text: val})

console.log('\'Allo \'Allo! Event Page for Browser Action')
