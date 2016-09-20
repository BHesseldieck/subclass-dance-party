var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="superHeroDancer"><img src = "./src/superHero.png" ></span>');
  this.top = top;
  this.left = 0;
  this.timeBetweenSteps = 100;
  this.move();
};

makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;

makeSuperHeroDancer.prototype.move = function() {
  var context = this;

  makeSuperHeroDancer.prototype.changePosition.call(context, context.top, context.left);
  setInterval(function() { 
    if (context.left > $(window).width() + 50) {
      context.left = 0;
    }
    makeSuperHeroDancer.prototype.changePosition.call(context, context.top, context.left);
  }, context.timeBetweenSteps);
};

makeSuperHeroDancer.prototype.changePosition = function() {
  this.left += 5;
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

