'use strict';

host = window.location.host


functions =
  'mora.jp': (val) ->
    v = document.getElementById('videoTagAuditionPlayer')
    v.volume = val

chrome.storage.sync.get 'myset', (obj) ->
  val = obj.myset
  theFunction = functions[host]
  theFunction(val) if theFunction
