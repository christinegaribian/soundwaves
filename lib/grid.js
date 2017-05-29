
// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;


class Grid {
  constructor(context){
    this.context = context;
  }

  draw() {
    this.drawSquares.bind(this)();
  };

  drawSquares(){

    for (var x = 0; x < canvasWidth; x+= squareLength) {
      for (var y = 0; y < canvasWidth; y+= squareLength){
        this.context.strokeRect(x, y, squareLength, squareLength);
        this.context.fillStyle = 'rgb(200, 0, 0)';

        this.context.fillRect(x, y, squareLength, squareLength);
      }
    }
  }
}

module.exports = Grid;
