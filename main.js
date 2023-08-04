let nav1 = document.getElementById("navAbout");
let nav2 = document.getElementById("navDigitalTransform");
let nav3 = document.getElementById("navOnlineInclusion");
let nav4 = document.getElementById("navBestPractices");
let nav5 = document.getElementById("navInovationGame");
let firstSlide = document.getElementById("slideWhyDoWe");
let secondSlide = document.getElementById("slideInclusionOnline");
let thirdSlide = document.getElementById("slideDigitalTransform");
let fourthSlide = document.getElementById("slideDigitalPlatforms");
let fifthSlide = document.getElementById("slideSurprise");
let closeMobileMenu = document.getElementById("closeMobileMenu");
let header = document.getElementById("header");
let hamburgerMenu = document.getElementById("hamburgerMenu");


nav1.addEventListener("click", () => {
    goToSlide(firstSlide)
})
nav2.addEventListener("click", () => {
    goToSlide(secondSlide)
})
nav3.addEventListener("click", () => {
    goToSlide(thirdSlide)
})
nav4.addEventListener("click", () => {
    goToSlide(fourthSlide)
})
nav5.addEventListener("click", () => {
    goToSlide(fifthSlide)
})

hamburgerMenu.addEventListener("click", openMobileMenufn)

closeMobileMenu.addEventListener("click", closeMobileMenufn)

function goToSlide(el) {
    let y = el.offsetTop
    window.scrollTo({
        top: y,
        behavior: "smooth",
    });
}

function openMobileMenufn() {
    header.style.visibility = "visible"
    closeMobileMenu.style.visibility = "visible"
}

function closeMobileMenufn() {
    header.style.visibility = "hidden"
    closeMobileMenu.style.visibility = "hidden"
}

// function resizeScreen(){
//     header.style.visibility = "visible"
// }

// document.addEventListener("resize", resizeScreen)