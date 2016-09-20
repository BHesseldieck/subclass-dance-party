// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition(top, left);

};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    display: "inline"
  };
  this.$node.css(styleSettings);
};

var rotateInterval;
makeDancer.prototype.rotate = function() {
  rotateInterval = setInterval(function(){
  var rotated = 0;
  
  var styleSettings = {
    transform: rotate(rotated)
  };
  rotated += 5
    this.$node.css(styleSettings);
  }, 20)
};
