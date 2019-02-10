//When user clicks on box #1 message will appear
var box1 = document.getElementById ("box1").addEventListener("click",
  function () {
   alert("Oooh - so close, but no cigar!");
  }, false
);

//When user clicks on box #2 message will appear
var box2 = document.getElementById ("box2").addEventListener("click",
  function () {
   alert("Ding Ding Ding - We have a winner!");
  }, false
);

//when user clicks on box #3 message will appear
var box3 = document.getElementById ("box3").addEventListener("click",
  function () {
   alert("Oops, better luck next time!");
  }, false
);

//When any three boxes are clicked, have a button that says "Start Over"
var home = document.getElementById ("home"),
    firstbutton = document.getElementById ("firstbutton");
 home.addEventListener("click", function (event) {
  event.preventDefault ();
  firstbutton.style.display = (firstbutton.style.display === "none") ? "block" :
  "none";
}, false);
  firstbutton.style.display = "none";


//Change the button background color when using mouseenter on all boxes
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
