var makeDrakeDancer = function(top, left, timeBetween) {
  makeDancer.call(this);
  this.$node = $('<span class="drakeDancer"><img src = "./src/drake.gif" ></span>');
  this.setPosition(top, left);
};

makeDrakeDancer.prototype = Object.create(makeDancer.prototype);
makeDrakeDancer.prototype.constructor = makeDrakeDancer;
