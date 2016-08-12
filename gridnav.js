/*
  Gridnav - a way to navigate lists with a keyboard in a
  2D fashion instea of item-by-item
  Copyright (c) 2016 Christian Heilmann
  Licensed under the MIT license:
  http://www.opensource.org/licenses/mit-license.php
  Version:  1.0.0
*/

var Gridnav = function(listelement){
  this.list = document.querySelector(listelement);

  if(!this.list) {
    throw Error('List item could not be found');
  } else {
    if (!this.list.getAttribute('data-element')) {
      throw Error('You did not define an element');
    }
    if (!this.list.getAttribute('data-amount')) {
      throw Error('You did not define the amount of elements');
    }
  }
  this.element = this.list.getAttribute('data-element').toUpperCase();
  this.amount = +this.list.getAttribute('data-amount');

  /* Coming soon? dynamic grids :)
  this.amount = parseInt(this.list.offsetWidth / this.list.querySelector(":first-of-type").offsetWidth,10);
  */

  this.codes = {39:1, 37:-1, 38:-this.amount, 40:this.amount};
  this.all = this.list.querySelectorAll(this.element);
  var that = this;
  this.keynav = function(ev) {
    var t = ev.target;
    if (t.tagName === that.element) {
      for (var i = 0; i < that.all.length; i++) {
        if (that.all[i] === t) {
          c = i;
          break;
        }
      }
      if (that.codes[ev.keyCode]) {
        if (that.all[c + that.codes[ev.keyCode]]) {
          that.all[c + that.codes[ev.keyCode]].focus()
        }
      }
    }
  }
  this.list.addEventListener('keyup',this.keynav);
};