//--------------------NAVBAR ANIMATION-------------------
window.onscroll = function() {
var navbar = document.getElementById('navbar');
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.classList.add('scrolled');
} 
else{
    navbar.classList.remove('scrolled');
}
};


//--------------------DYNAMIC IMAGE LOADING & BUTTON CONTROLS----------------
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
            img.style.backgroundPosition="center";
        });
        
    };

    // Call the function to load images
    loadImages();

    // Set up event listeners for carousel buttons
    sliderButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = (imageList.clientWidth)/2 * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
};

window.addEventListener("load", () => {
    // Specify image paths for each recommendation
    const imagesRecommendations1 = ["assets/Wallpapers/avengers-1.png", "assets/Wallpapers/avengers-civil-war.png", "assets/Wallpapers/avengers-ultron.png", "assets/Wallpapers/avengers-infinity-war.png", "assets/Wallpapers/avengers-endgame.png"];

    const imagesRecommendations2 = ["assets/Wallpapers/friends_wallpaper.png", "assets/Wallpapers/peaky_blinders_wallpaper.png", "assets/Wallpapers/stranger-things_wallpaper.png"];

    const imagesRecommendations3 = [
        "assets/Wallpapers/FNAF.png",
        "assets/Wallpapers/walking-dead.png",
        "assets/Wallpapers/the-last-of-us.png",
        "assets/Wallpapers/veronica.png",
        "assets/Wallpapers/the-fall-of-the-house-of-usher.png",
        "assets/Wallpapers/don-t-breathe-2.png",
        "assets/Wallpapers/the-haunting-of-hill-house.png",
        "assets/Wallpapers/30-days-of-haunted.png",
        "assets/Wallpapers/annabelle.png",
        "assets/Wallpapers/annabelle-creation.png",
        "assets/Wallpapers/annabelle-comes-home.png",
        "assets/Wallpapers/the-conjuring-2.png",
        "assets/Wallpapers/conjuring-3.png",
        "assets/Wallpapers/stranger-things_wallpaper.png",
        "assets/Wallpapers/insidious-1.png",
        "assets/Wallpapers/insidious-2.png",
        "assets/Wallpapers/insidious-3.png",
        "assets/Wallpapers/insidious-4.png",
        "assets/Wallpapers/insidious-5.png"
    ];

    // Initialize sliders for each recommendation
    initSlider("recommendations-1", imagesRecommendations1);
    initSlider("recommendations-2", imagesRecommendations2);
    initSlider("recommendations-3", imagesRecommendations3);
});
