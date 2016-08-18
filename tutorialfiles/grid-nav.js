(function(){
  var list = document.querySelector('ul');
  var items = list.querySelectorAll('button');
  var amount = Math.floor(
        list.offsetWidth / 
        list.firstElementChild.offsetWidth
      );
  var codes = {
    38: -amount,
    40: amount, 
    39: 1,
    37: -1
  };
  for (var i = 0; i < items.length; i++) {
    items[i].index = i;
  }
  function handlekeys(ev) {
    var keycode = ev.keyCode;
    if (codes[keycode]) {
      var t = ev.target;
      if (t.index !== undefined) {
        if (items[t.index + codes[keycode]]) {
          items[t.index + codes[keycode]].focus();
        }
      }
    }
  }
  list.addEventListener('keyup', handlekeys);
})();
