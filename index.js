const hue = require('node-hue-api');
require('./image.js');
require('./color-thief.min.js');

var host = '192.168.1.6';
var user = 'E7pLjjynbsOgscZSx-oBGhzbhEWfXxuynvQFn8g3';
var light = 2;

var lightApi = new hue.HueApi(host, user);

var stateOn = hue.lightState.create().on();
var stateBrightOn = hue.lightState.create().on().brightness(100);
var stateDimmedOn = hue.lightState.create().on().brightness(5);
var stateOff = hue.lightState.create().off();
var stateLongAlert = hue.lightState.create().longAlert();
var red = hue.lightState.create().on().rgb([255, 0, 0]);
var green = hue.lightState.create().on().rgb([0, 255, 0]);
var blue = hue.lightState.create().on().rgb([0, 0, 255]);

function wait() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}


function setLight() {
  lightApi.setLightState(light, blue)

      .then(() => lightApi.setLightState(light, stateOff))
      .catch(err => console.log('error', err));
}



const button = document.querySelector('#makeBlue');
button.addEventListener("click", function () {
  setLight();
});
