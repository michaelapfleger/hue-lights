const {desktopCapturer } = require('electron');
const hue = require('node-hue-api');

const host = '192.168.1.6';
const user = 'E7pLjjynbsOgscZSx-oBGhzbhEWfXxuynvQFn8g3';
const light = 2;

const api = new hue.HueApi(host, user);

const stateOn = hue.lightState.create().on();
const stateBrightOn = hue.lightState.create().on().brightness(100);
const stateDimmedOn = hue.lightState.create().on().brightness(5);
const stateOff = hue.lightState.create().off();
const stateLongAlert = hue.lightState.create().longAlert();
const red = hue.lightState.create().on().rgb([255, 0, 0]);
const green = hue.lightState.create().on().rgb([0, 255, 0]);
const blue = hue.lightState.create().on().rgb([0, 0, 255]);
const video = document.querySelector('#video');

function wait() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}


function setLight() {
  api.setLightState(light, blue)

      .then(() => api.setLightState(light, stateOff))
      .catch(err => console.log('error', err));
}



const button = document.querySelector('#makeBlue');
button.addEventListener("click", function () {
  setLight();

  desktopCapturer.getSources({ types: ['window', 'screen'] }, (error, sources) => {

    navigator.mediaDevices.getUserMedia({video: true})
    // permission granted:
        .then(function(stream) {
          video.src = window.URL.createObjectURL(stream);
        })
        // permission denied:
        .catch(function(error) {
          document.body.textContent = 'Could not access the camera. Error: ' + error.name;
        });
  });




});