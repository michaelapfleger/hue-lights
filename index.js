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

  // desktopCapturer.getSources({ types: ['window', 'screen'] }, (error, sources) => {
  //   if (error) {
  //     console.log(error);
  //   }
  //   console.log(sources);
  //   // const appSource = sources.find(source => source.name === 'Ractio - Online Radio');
  //   const appSource = sources[0];
  //   navigator.webkitGetUserMedia({
  //     audio: false,
  //     video: {
  //       mandatory: {
  //         chromeMediaSourceId: sources[0].id,
  //         chromeMediaSource: 'desktop',
  //       },
  //     },
  //   }, (stream) => {
  //     console.log('success', stream);
  //     var source = document.createElement('source');
  //     source.setAttribute('src', URL.createObjectURL(stream) );
  //     video.appendChild(source);
  //   }, (err) => {
  //     console.log('error', err);
  //   });
  // });




});