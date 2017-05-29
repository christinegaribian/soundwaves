
// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;
const Square = require("./square");

class Grid {
  constructor(canvas, context){
    this.canvas = canvas;
    this.context = context;
    this.grid = this.drawSquares.bind(this)();
    this.handleClick = this.handleClick.bind(this);
    this.canvas.addEventListener('click', this.handleClick);
  }

  draw() {
    this.drawSquares.bind(this)();
  };

  // Return a 2d array (16 x 16) of squares
  drawSquares(){
    const grid = [];

    for (let x = 0; x < 16; x++) {
      let row = [];
      for (let y = 0; y < 16; y++){
        row.push(new Square(x, y, this.context));

      }
      grid.push(row);
    }
    return grid;
  }

  handleClick(e){
    var clickedX = e.offsetX;
    var clickedY = e.offsetY;

    // Converts the coordinates of the click on the screen to a the index
    // of the clicked square in the grid
    let squareX = Math.floor(clickedX / squareLength);
    let squareY = Math.floor(clickedY / squareLength);
    this.grid[squareX][squareY].togglePlaying();
  }
}

module.exports = Grid;
