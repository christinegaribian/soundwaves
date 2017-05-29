class Square {
  constructor(x, y, context, playing = false){
    this.x = x*squareLength;
    this.y = y*squareLength;
    this.context = context;
    this.playing = playing;
    this.drawSquare('rgb(200, 0, 0)');
    this.togglePlaying = this.togglePlaying.bind(this);
    // this.note??
    // this.playNote?
  }

  drawSquare(color){
    this.context.strokeRect(this.x, this.y, squareLength, squareLength);
    this.context.fillStyle = color;
    this.context.fillRect(this.x, this.y, squareLength, squareLength);
  }

  togglePlaying(){
    this.playing = !this.playing

    if (this.playing) {
      // change background color
      this.drawSquare('rgb(100, 0, 0)');
    } else {
      this.drawSquare('rgb(200, 0, 0)');
    }
  }
}

module.exports = Square;
