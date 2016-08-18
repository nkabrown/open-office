(function () {
  if (typeof CanvasDemo === "undefined") {
    window.CanvasDemo = {};
  }

var Bubble = CanvasDemo.Bubble = function () {
  this.centerX = 210;
  this.centerY = 300;
  this.radius = 10;
}

Bubble.prototype.upKey = function() {
  this.centerY -= 10;
  if (this.centerY < 10) { this.centerY = 10; }
}

Bubble.prototype.downKey = function() {
  this.centerY += 10;
  if (this.centerY > 590) { this.centerY = 590; }
}

Bubble.prototype.rightKey = function() {
  this.centerX += 10
  if (this.centerX > 410) { this.centerX = 410; }
};

Bubble.prototype.leftKey = function() {
  this.centerX -= 10
  if (this.centerX < 10) { this.centerX = 10; }
};

Bubble.prototype.randomize = function() {
  this.centerX = Math.floor((Math.random() * 410) + 10);
  this.centerY = Math.floor((Math.random()  * 580) + 10);
}

Bubble.prototype.render = function(ctx) {
  ctx.fillStyle = "white";
  ctx.beginPath();

  ctx.arc(
    this.centerX,
    this.centerY,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
}

})();
