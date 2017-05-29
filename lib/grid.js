
// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;
const Square = require("./square");

class Grid {
  constructor(canvas, context){
    this.canvas = canvas;
    this.context = context;
    this.grid = this.draw.bind(this)();
    this.handleClick = this.handleClick.bind(this);
    this.canvas.addEventListener('click', this.handleClick);
  }

  draw() {
    this.drawSquares.bind(this)();
  };

  /**
   * Returns a 2D array (16 by 16) of squares
   */
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

  handleClick(){
    console.log("clicked");
  }
}

module.exports = Grid;
