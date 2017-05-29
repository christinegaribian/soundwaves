const Grid = require("./grid");
const Sequencer = require("./sequencer");

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementsByTagName("canvas")[0];
  const context = canvas.getContext("2d");
  const grid = new Grid(context);

  canvasWidth = canvas.width;
  squareLength = canvasWidth/16;
  grid.draw();


  // new Sequencer({
  //   grid
  // }).start();
});
