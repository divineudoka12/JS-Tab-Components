let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabspane = tabHeader.getElementsByTagName("div");

for(let i=0; i<tabspane.length; i++){
    tabspane[i].addEventListener("click", function(){
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabspane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 4) *
        ${i}`;
    });
}    