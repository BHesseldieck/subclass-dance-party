var makeCatDJ = function(top, left, timeBetween) {
  makeDancer.call(this);
  // this.top = $(window).height() / 2;
  // this.left = $(window).width() / 2;
  this.$node = $('<span class="catDJ"><img src = "./src/kitty.gif" ></span>');
  // this.setPosition(this.top, this.left);
};

makeCatDJ.prototype = Object.create(makeDancer.prototype);
makeCatDJ.prototype.constructor = makeCatDJ;