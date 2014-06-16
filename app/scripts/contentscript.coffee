'use strict';

host = window.location.host

functions =
  'mora.jp': (val) ->
    v = document.getElementById('videoTagAuditionPlayer')
    v.volume = val

tsumami = functions[host]

if tsumami
  chrome.storage.sync.get 'myset', (obj) ->
    val = obj.myset
    tsumami(val)
