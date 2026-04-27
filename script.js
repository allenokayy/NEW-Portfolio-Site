// hamburger menu
const hamburgerCheck = document.querySelector("input");
const nav = document.querySelector("nav");

hamburgerCheck.addEventListener('change', (event) => {
    if(window.innerWidth <= 550) {
        if (event.target.checked == true) {
        //    console.log("testy");
            nav.style.left=0;
        } else {
            // console.log("untesty");
            nav.style.left="-1100px";
        } 
    }
});

window.onload = function() {
    hamburgerCheck.checked = false;
};

window.addEventListener('resize', () => {
    
    if (window.matchMedia('(min-width: 0)').matches) {
        nav.style.left="-1100px";
    }
  
    if (window.matchMedia('(min-width: 551px)').matches) {
    nav.style.left="0";
  }
});

// accordion menu. followed W3schools tutorial for this

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}