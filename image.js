var video = document.querySelector("#videoElement");

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia({video: true}, handleVideo, videoError);
}

function handleVideo(stream) {
  video.src = window.URL.createObjectURL(stream);
}

function videoError(e) {
  console.log('[videoError]', e.message);
}
var v,canvas,context,w,h;
var imgtag = document.getElementById('imgtag'); // get reference to img tag
var sel = document.getElementById('fileselect'); // get reference to file select input element

document.addEventListener('DOMContentLoaded', function(){
  // when DOM loaded, get canvas 2D context and store width and height of element
  v = document.getElementById('videoElement');
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  w = canvas.width;
  h = canvas.height;

},false);

var sourceImage;

function draw(v,c,w,h) {

  if(v.paused || v.ended) return false; // if no video, exit here

  context.drawImage(v,0,0,w,h); // draw video feed to canvas
}

var t = setInterval(take,1000);
function take() {

  draw(v,context,w,h); // when save button is clicked, draw video feed to canvas
  var colorThief = new ColorThief();
  console.log('[color]', colorThief.getColor(document.querySelector("#canvas")));


  setLight(colorThief.getColor(document.querySelector("#canvas")));

};
// t();

