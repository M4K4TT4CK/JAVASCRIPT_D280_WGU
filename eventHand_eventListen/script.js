function myMouseoverHandler(event) {
    event.target.style.backgroundColor = "yellow";
 }
 
 function myMouseoutHandler(event) {
    event.target.style.backgroundColor = "white";
 }
 
 function myClickHandler(event) {
    event.target.style.color = "black";
 }
 
 // Register the event handlers here
 let elements = document.getElementsByClassName("highlight");
 for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", myMouseoverHandler);
    elements[i].addEventListener("mouseout", myMouseoutHandler);
    elements[i].addEventListener("click", myClickHandler);
 }
 
 