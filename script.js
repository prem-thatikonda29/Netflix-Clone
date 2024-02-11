//<--------------------NAVBAR ANIMATION------------------->
window.onscroll = function() {
var navbar = document.getElementById('navbar');
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.classList.add('scrolled');
} 
else{
    navbar.classList.remove('scrolled');
}
};



//<--------------------DYNAMIC PREVIEW IMAGE LOADING & BUTTON CONTROLS---------------->
window.addEventListener("load", () => {
    const moviesData = [
        {
            backgroundImagePath: "assets/Wallpapers/stranger-things_wallpaper.png",
            logoPath: "assets/Stranger-Things-logo.png",
            description: "Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but secretly experiments with the paranormal and supernatural, sometimes with human test subjects."
        },
        {
            backgroundImagePath: "assets/Wallpapers/jjk_wallpaper.png",
            logoPath: "assets/jjk_movie_logo.png",
            description: "The prequel to Jujutsu Kaisen (2020), where a high schooler gains control of an extremely powerful cursed spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers. Yuta Okkotsu is haunted. Ever since his childhood friend Rika died in a traffic accident, her ghost has stuck with him."
        },
        {
            backgroundImagePath: "assets/Wallpapers/minions_wallpaper.png",
            logoPath: "assets/depicable_me_logo.png",
            description: "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness."
        }
    ];

    // Select the #preview element
    const previewSection = document.querySelector("#preview");

    // Randomly select a movie
    const randomIndex = Math.floor(Math.random() * moviesData.length);
    const selectedMovie = moviesData[randomIndex];

    // Set the background image dynamically
    if (selectedMovie.backgroundImagePath) {
        previewSection.style.backgroundImage = `url(${selectedMovie.backgroundImagePath})`;
    }

    // Select the elements for movieLogo and movieDesc
    const movieLogo = document.querySelector("#preview .movieLogo img");
    const movieDesc = document.querySelector("#preview .movieDesc p");

    // Update the content dynamically
    if (selectedMovie.logoPath) {
        movieLogo.src = selectedMovie.logoPath;
        movieLogo.alt = "Movie Logo";
    }

    if (selectedMovie.description) {
        movieDesc.textContent = selectedMovie.description;
    }
});



//<--------------------DYNAMIC CAROUSEL IMAGE LOADING & BUTTON CONTROLS---------------->
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
