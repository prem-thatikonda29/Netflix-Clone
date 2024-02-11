window.onscroll = function() {
var navbar = document.getElementById('navbar');
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.classList.add('scrolled');
} 
else{
    navbar.classList.remove('scrolled');
}
};


const initSlider = (sectionId, imagePaths) => {
    const imageList = document.querySelector(`#${sectionId} .carousel .movie`);
    const sliderButtons = document.querySelectorAll(`#${sectionId} .carousel .carousel-button`);

    // Function to load images into the carousel
    const loadImages = () => {
        imagePaths.forEach((path) => {
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image"; // Set your alt text accordingly
            imageList.appendChild(img);
        });
    };

    // Call the function to load images
    loadImages();

    // Set up event listeners for carousel buttons
    sliderButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
};

window.addEventListener("load", () => {
    // Specify image paths for each recommendation
    const imagesRecommendations2 = ["assets/Wallpapers/friends_wallpaper.png", "assets/Wallpapers/peaky_blinders_wallpaper.png", "assets/Wallpapers/stranger-things_wallpaper.png"];
    const imagesRecommendations1 = ["path4.jpg", "path5.jpg", "path6.jpg"];
    const imagesRecommendations3 = ["path7.jpg", "path8.jpg", "path9.jpg"];

    // Initialize sliders for each recommendation
    initSlider("recommendations-1", imagesRecommendations1);
    initSlider("recommendations-2", imagesRecommendations2);
    initSlider("recommendations-3", imagesRecommendations3);
});
