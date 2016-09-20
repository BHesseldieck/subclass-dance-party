var makeDrakeDancer = function(top, left, timeBetween) {
  makeDancer.call(this);
  this.$node = $('<span class="drakeDancer"><img src = "http://i.giphy.com/e2AKpOvx2MREY.gif" ></span>');
  this.top = $(window).height() - 300;
  this.left = $(window).width() / 2;
  this.setPosition(this.top, this.left);
};

makeDrakeDancer.prototype = Object.create(makeDancer.prototype);
makeDrakeDancer.prototype.constructor = makeDrakeDancer;

