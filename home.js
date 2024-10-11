// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const heroSection = document.querySelector('.hero');
const heroImageElement = document.querySelector('.hero-image img');

// Array of image pairs: each object holds a background image and a corresponding hero image
const imagePairs = [
    {
        background: './image/IMG_8317.JPG', // Background image 1
        heroImage: './image/IMG_8256.PNG'      // Hero image 1
    },
    {
        background: './image/IMG_8258.JPG', // Background image 2
        heroImage: './image/IMG_8247.JPG'      // Hero image 2
    },
];

let currentIndex = 0;

// Function to change the background and hero images
function changeHeroContent() {
    const { background, heroImage } = imagePairs[currentIndex];

    // Change the background image with a smooth transition
    heroSection.style.backgroundImage = `url('${background}')`;

    // Change the hero image with a smooth transition
    heroImageElement.style.opacity = 0; // Fade out the current image
    setTimeout(() => {
        heroImageElement.src = heroImage; // Change the image source
        heroImageElement.style.opacity = 1; // Fade in the new image
    }, 500); // Delay to match the fade-out effect

    // Increment index for the next image pair, loop back if at the end
    currentIndex = (currentIndex + 1) % imagePairs.length;
}

// Start the automatic slider, changing every 5 seconds
setInterval(changeHeroContent, 5000);

// Initial call to display the first set of images
changeHeroContent();

function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
  }
  











