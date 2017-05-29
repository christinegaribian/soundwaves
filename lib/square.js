class Square {
  constructor(x, y, context, playing = false){
    this.x = x*squareLength;
    this.y = y*squareLength;
    this.context = context;
    this.playing = playing;
    this.drawSquare();
    this.togglePlaying = this.togglePlaying.bind(this);
    // this.note??
    // this.playNote?
  }

  drawSquare(){
    this.context.strokeRect(this.x, this.y, squareLength, squareLength);
    this.context.fillStyle = 'rgb(200, 0, 0)';
    this.context.fillRect(this.x, this.y, squareLength, squareLength);
  }

  togglePlaying(){
    this.playing = !this.playing
    console.log(this.playing);
  }
}

module.exports = Square;
