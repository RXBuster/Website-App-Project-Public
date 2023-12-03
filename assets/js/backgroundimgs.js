const images = [
    'assets/img/ani1.jpg',
    'assets/img/ani2.jpg',
    'assets/img/ani3.jpg',
];

let currentIndex = 0;
const backgroundSection = document.querySelector('.background-section');

function changeBackground() {
    backgroundSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 5 seconds (adjust timing as needed)
setInterval(changeBackground, 2500);








