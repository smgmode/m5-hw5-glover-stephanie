var listItem = document.querySelectorAll('hero-section');

//Function to Toggle "show" Class on Hover
function myFunction() {
  this.classList.toggle('show');
}

//Function to Add Class Red to All List Items
function addClassToAll(){
  for(i=0; i<listenItem.length;i++) {
    listenItem[i].classList.add('red');
  }
}

//Even Listener In a loop
for(i=0; i<listenItem.length; i++) {
  listItem[i].addEventListener('click',andClassToAll);
}


//Event Listeners in a loop to Apply Mouseenter and Mouseleave
for (i=0; i<listenItem.length;i++) {
  listItem[i].addEventListener('mouseenter', myFunction);
  listItem[i].addEventListener('mouseleave', myFunction);

}
