let currentSlideIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlides() {
    slides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    document.getElementById('prev').disabled = currentSlideIndex === 0;
    document.getElementById('next').disabled = currentSlideIndex === totalSlides - 1;
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlides();
    }
}

function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
        currentSlideIndex++;
        updateSlides();
    }
}

// Initialize the slide view
updateSlides();
