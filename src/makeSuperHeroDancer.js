var makeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="superHeroDancer"><img src = "./src/superHero.png" ></span>');
  this.top = top;
  this.left = 0;
  this.timeBetweenSteps = 100;
  this.move();
  this.actionDone = false;
};

makeSuperHeroDancer.prototype = Object.create(makeDancer.prototype);
makeSuperHeroDancer.prototype.constructor = makeSuperHeroDancer;

makeSuperHeroDancer.prototype.move = function() {
  var context = this;

  makeSuperHeroDancer.prototype.changePosition.call(context, context.top, context.left);
  setInterval(function() { 
    if (context.left > $(window).width() + 50) {
      context.left = 0;
      context.actionDone = false;
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

  for (var i = 0; i < window.dancers.length; i++) {
    if ((window.dancers[i].$node.position().top - this.top < 100)  && (window.dancers[i].$node.position().left - this.left < 100) && !(window.dancers[i] instanceof makeSuperHeroDancer) && this.actionDone === false) {
      this.action();
    }
  }

  this.$node.css(styleSettings);
};

makeSuperHeroDancer.prototype.action = function() {
  console.log('close by', this);
  this.actionDone = true;
  $(this.$node.children()[0]).css('width', 500, 'height', 300);
};
