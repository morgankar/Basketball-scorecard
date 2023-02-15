let hscore = 0;
let gscore = 0;
document.getElementById("home-scr").textContent = hscore;
document.getElementById("guest-scr").textContent = gscore;

//BUTTON FUNCTIONS

 //Home scoring function
function HaddOne() {
    hscore = hscore+1
    document.getElementById("home-scr").textContent = hscore;
}

function HaddTwo() {
     hscore = hscore+2;
    document.getElementById("home-scr").textContent = hscore;
}

function HaddThree() {
     hscore = hscore+3;
    document.getElementById("home-scr").textContent = hscore;
}



 //Guest scoring function
 function GaddOne() {
    gscore = gscore+1
    document.getElementById("guest-scr").textContent = gscore;
}

 function GaddTwo() {
     gscore = gscore+2;
   document.getElementById("guest-scr").textContent = gscore;
}

  function GaddThree() {
     gscore = gscore+3;
    document.getElementById("guest-scr").textContent = gscore;
}   

//Reset function 
function resetScore() {
    gscore = 0;
    hscore = 0;
    document.getElementById("guest-scr").textContent = gscore;
    document.getElementById("home-scr").textContent = hscore;
}