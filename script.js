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


// home page buttons 

const backButton = document.getElementById("backbutton");
const frontButton = document.getElementById("forwardbutton");
const scrollGal = document.getElementById("galTop");

backButton.onclick = function () {
    scrollGal.scrollBy({
        left: -400,
        behavior: "smooth"
    });
};

frontButton.onclick = function () {
    scrollGal.scrollBy({
        left: 400,
        behavior: "smooth"
    });
};