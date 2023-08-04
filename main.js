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

function goToSlide(el) {
    let y = el.offsetTop
    window.scrollTo({
        top: y,
        behavior: "smooth",
    });
}