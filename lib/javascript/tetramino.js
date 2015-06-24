(function () {
  if (typeof window.Tetris == 'undefined') {
    window.Tetris = {};
  }

  var Tetramino = Tetris.Tetramino = function (options) {
    this.pos = options.pos;
    this.rotation = options.rotation;
    this.color = options.color;
    this.game = options.game;
    if (options.isFixed) {
      this.isFixed = options.isFixed;
    } else {
      this.isFixed = false;
    }
  };

  Tetramino.prototype.drop = function () {
    if (this.pos[0] >= 23) {
      this.pos[0] ++;
      return true;
    }
    return false;
  };

  Tetramino.prototype.spinLeft = function () {
    // if (this.isValidRotation(this.game))
    this.rotation = (this.rotation + 3) % 4;
    return true;
  };

  Tetramino.prototype.spinRight = function () {
    // if (this.isValidRotation(this.game))
    this.rotation = (this.rotation + 1) % 4;
    return true;
  };

  Tetramino.prototype.moveRight = function () {
    if (this.pos[1] < 9) {
      this.pos[1] ++;
      return true;
    }
    return false;
  };

  Tetramino.prototype.moveLeft = function () {
    if (this.pos[1] > 0) {
      this.pos[1] --;
      return true;
    }
    return false;
  };

  Tetramino.prototype.remove = function () {
    this.game.remove(this);
  };

})();
