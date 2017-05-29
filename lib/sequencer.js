require("./grid");
class Sequencer {
  constructor(grid){
    this.grid = grid;
    this.start = this.start.bind(this);
    this.context = this.grid.grid.context;
  }

  start(){
    console.log(this.grid);
    this.grid.draw();
    console.log("drawn");
  }
}

module.exports = Sequencer;
