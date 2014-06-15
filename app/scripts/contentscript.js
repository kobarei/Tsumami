(function() {
  'use strict';
  var functions, host;

  host = window.location.host;

  functions = {
    'mora.jp': function(val) {
      var v;
      v = document.getElementById('videoTagAuditionPlayer');
      return v.volume = val;
    }
  };

  chrome.storage.sync.get('myset', function(obj) {
    var theFunction, val;
    val = obj.myset;
    theFunction = functions[host];
    if (theFunction) {
      return theFunction(val);
    }
  });

}).call(this);
