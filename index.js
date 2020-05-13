var drums = document.getElementsByClassName("drum");
for(var i = 0; i<drums.length; i++) {
  drums[i].addEventListener("click", function() {
    var button = this.innerHTML;
    playSound(button);
    buttonAnimation(button);
  });
}
document.addEventListener("keydown", function(e) {
  var key = e.key;
  playSound(key);
  buttonAnimation(key);
});

function playSound(keyOrButton) {
  switch(keyOrButton) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
  }
}

function buttonAnimation(keyOrButton) {
  drum = document.querySelector("."+keyOrButton);
  drum.classList.add("pressed");
  setTimeout(function() {
    drum.classList.remove("pressed");
  }, 100);  
}
