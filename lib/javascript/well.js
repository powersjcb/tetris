(function () {
  if (typeof window.Tetris == 'undefined') {
    window.Tetris = {};
  }

  var Well = Tetris.Well = function () {
    this.grid = seedGridNull();
  };

  








  function seedGridNull () {
    var arr = [];
    for (var i = 0; i < 23; i++) {
      var subArr = [];
      for (var j = 0; j < 9; j++) {
        subArr.push(null);
      }
      arr.push(subArr);
    }
    return arr;
  }

})();
