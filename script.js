let body = document.querySelector("body");
let menuDrop =  document.querySelector(".sidebar-nav");
let toggleButton = document.querySelector(".fa-bars");
console.log(toggleButton);

// menuDrop.style.display = "block";

toggleButton.onclick = function() {
    menuDrop.classList.toggle("active");
}



// ************************************************
// text animation
let typed = new Typed('#text', {
    strings: ["FullStack Developer","App Developer","Web & Graphic Designer","Front & Back End Design"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true
 });


