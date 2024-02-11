window.onscroll = function() {
var navbar = document.getElementById('navbar');
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.classList.add('scrolled');
} 
else{
    navbar.classList.remove('scrolled');
}
};


const initSlider = (sectionId) => {
    const imageList = document.querySelector(`#${sectionId} .carousel .movie`);
    const sliderButtons = document.querySelectorAll(`#${sectionId} .carousel .carousel-button`);
    
    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", () => {
    initSlider("recommendations-1");
    initSlider("recommendations-2");
    initSlider("recommendations-3");
});
