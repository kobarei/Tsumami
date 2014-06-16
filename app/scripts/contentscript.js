(function() {
  'use strict';
  var functions, host, tsumami;

  host = window.location.host;

  functions = {
    'mora.jp': function(val) {
      var v;
      v = document.getElementById('videoTagAuditionPlayer');
      return v.volume = val;
    }
  };

  tsumami = functions[host];

  if (tsumami) {
    chrome.storage.sync.get('myset', function(obj) {
      var val;
      val = obj.myset;
      return tsumami(val);
    });
  }

}).call(this);
