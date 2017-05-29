const Grid = require("./grid");
const Sequencer = require("./sequencer");

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementsByTagName("canvas")[0];
  const context = canvas.getContext("2d");

  canvasWidth = canvas.width;
  squareLength = canvasWidth/16;
  const grid = new Grid(canvas, context);


  // grid.draw();

// const soundwave = new Soundwave();
// soundwave.play();

  // new Sequencer({
  //   grid
  // }).start();
});
