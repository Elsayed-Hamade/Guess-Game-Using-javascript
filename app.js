/* Light & Dark Mode */
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const container = document.querySelector(".container");
const logoImg = document.querySelector(".logo-img");


light.addEventListener("click", ()=>{
    document.body.classList.add("active");
    logoImg.src = "Assets/logoLight.png"
    
});

dark.addEventListener("click", ()=>{
    logoImg.src = "Assets/logoDark.png"
    document.body.classList.remove("active");
});


// Game Functions
