let main = document.getElementById("navMain");
let nav1 = document.getElementById("navAbout");
let nav2 = document.getElementById("navDigitalTransform");
let nav3 = document.getElementById("navOnlineInclusion");
let nav4 = document.getElementById("navDigitalPlatform");
let nav5 = document.getElementById("navDigitalManagement");
let nav6 = document.getElementById("navBestPractices");
let firstSlide = document.getElementById("slideWhyDoWe");
let banner = document.getElementById("banner");
let secondSlide = document.getElementById("slideDigitalTransform");
let thirdSlide = document.getElementById("slideInclusionOnline");
let fourthSlide = document.getElementById("slideDigitalPlatforms");
let digitalManagement = document.getElementById("digitalManagement");
let fifthSlide = document.getElementById("slideSurprise");
let closeMobileMenu = document.getElementById("closeMobileMenu");
let header = document.getElementById("header");
let hamburgerMenu = document.getElementById("hamburgerMenu");
let goBack = document.getElementById("goBack")

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
    goToSlide(digitalManagement)
})

nav6.addEventListener("click", () => {
    goToSlide(fifthSlide)
})

main.addEventListener("click", () => {
    goToSlide(banner)
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

window.addEventListener("resize", resizeScreen);

function resizeScreen(){
    if(window.innerWidth > 1040){
        header.style.visibility = "visible"
    }else{
        header.style.visibility = "hidden"
        closeMobileMenu.style.visibility = "hidden"
    }
}