(function(){
  var list = document.querySelector('ul');
  var items = list.querySelectorAll('button');
  var listwidth = list.offsetWidth;
  var itemwidth = list.firstElementChild.offsetWidth;
  var amount = Math.floor(listwidth / itemwidth);
  var codes = {38:-amount,40:amount,39:1,37:-1};
  for (var i = 0; i < items.length; i++) {
    items[i].count = i;
  }
  function handlekeys(ev) {
    var keycode = ev.keyCode;
    if (codes[keycode]) {
      var t = ev.target;
      if (t.count) {
        if (items[t.count + codes[keycode]]) {
          items[t.count + codes[keycode]].focus();
        }
      }
    }
  }

  list.addEventListener('keyup', handlekeys);
})();