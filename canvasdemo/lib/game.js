(function () {
  if (typeof CanvasDemo === "undefined") {
    window.CanvasDemo = {};
  }

  var Game = CanvasDemo.Game = function (xDim, yDim) {
    this.xDim = xDim;
    this.yDim = yDim;
    this.bubble = new CanvasDemo.Bubble()
  };

  Game.prototype.render = function (ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    ctx.fillStyle = "#423C40";
    ctx.fillRect(0, 0, 420, 600);
    this.bubble.render(ctx);
  };

  Game.prototype.handleKeyPress = function (e) {
    e.preventDefault()
    var keyCode = e.keyCode;
    switch (keyCode) {
      case 38:
        this.bubble.upKey();
        break;
      case 40:
        this.bubble.downKey();
        break;
      case 37:
        this.bubble.leftKey();
        break;
      case 39:
        this.bubble.rightKey();
        break;
    }
  };
  
  var timerHandle;
  Game.prototype.handleClick = function() {
    timerHandle = setInterval(function() {this.bubble.randomize()}.bind(this), 1000); 
  };

  Game.prototype.stopTimer = function() {
    clearInterval(timerHandle);
  };

  Game.prototype.start = function (canvasEl) {
    var ctx = canvasEl.getContext("2d");
    document.addEventListener("keydown", this.handleKeyPress.bind(this), false);
    document.getElementById('initialize').addEventListener('click', this.handleClick.bind(this), false);
    document.getElementById('stop').addEventListener('click', this.stopTimer.bind(this), false);
    var that = this;

    var animateCallback = function() {
      this.render(ctx);
      requestAnimationFrame(animateCallback);
    }.bind(this);

    animateCallback();
  };
})();
