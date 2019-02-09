//Change the button background color when using mouseenter
document.getElementById("box1").addEventListener("mouseenter",
  function() {
  document.getElementById("box1").style.backgroundColor = "#DC143C";
  document.getElementById("box1").style.color = "#FF4500";
}, false
);

document.getElementById("box2").addEventListener("mouseenter",
  function() {
  document.getElementById("box2").style.backgroundColor = "#FF00FF";
  document.getElementById("box2").style.color = "#8B008B";
}, false
);

document.getElementById("box3").addEventListener("mouseenter",
  function() {
  document.getElementById("box3").style.backgroundColor = "#CD853F";
  document.getElementById("box3").style.color = "#FFA500";
}, false
);
