var video = document.querySelector("#videoElement");

// check for getUserMedia support
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
  // get webcam feed if available
  navigator.getUserMedia({video: true}, handleVideo, videoError);
}

function handleVideo(stream) {
  // if found attach feed to video element
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

function draw(v,c,w,h) {

  if(v.paused || v.ended) return false; // if no video, exit here

  context.drawImage(v,0,0,w,h); // draw video feed to canvas

  var uri = canvas.toDataURL("image/png"); // convert canvas to data URI

  // console.log(uri); // uncomment line to log URI for testing

  //imgtag.src = uri; // add URI to IMG tag src
}

document.getElementById('save').addEventListener('click',function(e){

  draw(v,context,w,h); // when save button is clicked, draw video feed to canvas
  var colorThief = new ColorThief();
  console.log('[color]', colorThief.getColor(sourceImage));

});

// for iOS

// create file reader
var fr;

sel.addEventListener('change',function(e){
  var f = sel.files[0]; // get selected file (camera capture)

  fr = new FileReader();
  fr.onload = receivedData; // add onload event

  fr.readAsDataURL(f); // get captured image as data URI
})

function receivedData() {
  // readAsDataURL is finished - add URI to IMG tag src
  imgtag.src = fr.result;
}