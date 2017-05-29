URLS = [""]

class Audio{
  constructor(){
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audio = new AudioContext();
    // this.loadSounds(URLS);
  }

  // loadSounds(){
  //   console.log("hello");
  //   var request = new XMLHttpRequest();
  //   request.open('GET', url, true);
  //   request.responseType = 'arraybuffer';
  //
  //   // Decode asynchronously
  //   request.onload = function() {
  //     this.context.decodeAudioData(request.response, function(buffer) {
  //       dogBarkingBuffer = buffer;
  //     }, onError);
  //   }
  //   request.send();
  // }
  //
  // playSound(buffer){
  //
  // }
}

module.exports = Audio;

// function loadDogSound(url) {
//   var request = new XMLHttpRequest();
//   request.open('GET', url, true);
//   request.responseType = 'arraybuffer';
//
//   // Decode asynchronously
//   request.onload = function() {
//     cont.decodeAudioData(request.response, function(buffer) {
//       dogBarkingBuffer = buffer;
//     }, onError);
//   }
//   request.send();
// }
//
// function playSound(buffer) {
//   var source = cont.createBufferSource(); // creates a sound source
//   source.buffer = buffer;                    // tell the source which sound to play
//   source.connect(cont.destination);       // connect the source to the context's destination (the speakers)
//   source.start(0);                           // play the source now
//   // note: on older systems, may have to use deprecated noteOn(time);
// }
//
// playSound();
// playSound();
// playSound();
