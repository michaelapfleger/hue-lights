document.addEventListener('keydown', (event) => {
  if(event.keyCode == 37){
    console.log("left");
  }else if(event.keyCode == 40){
    console.log("down");
    moveOneDown();
  }else if(event.keyCode == 39){
    console.log("right");
  }else if(event.keyCode == 38){
    console.log("top");
  }
});