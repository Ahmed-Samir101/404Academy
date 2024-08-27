let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const lessons = [
    {
        type: 'lesson',
        title: 'Introduction to Web Development',
        content: `
            <p>Think of web development as the art of building your very own digital playground! It’s all about creating and maintaining websites—a bunch of connected web pages that you can explore on the internet or a private network called an intranet. Imagine a website like Wikipedia as the entire amusement park, and each page (like the one on the infamous Emu War) as a different ride or attraction. Your job in web development? Make sure everything runs smoothly, looks awesome, and keeps visitors coming back for more fun!</p>
            <div class="img"> <img src="../assets/webdev.png" alt="Web Development"> </div>
        `
    },
    {
        type: 'question',
        question: 'What is web development?',
        choices: ['Creating software', 'Building websites', 'Managing databases', 'Designing logos'],
        correctAnswer: 1
    },
    {
        type: 'lesson',
        title: 'HTML Basics',
        content: `
            <h2>Understanding HTML</h2>
            <p>HTML (HyperText Markup Language) is the standard language used to create and design web pages...</p>
            <img src="../assets/html.png" alt="HTML Basics">
        `
    },
    {
        type: 'question',
        question: 'What does HTML stand for?',
        choices: ['HyperText Markup Language', 'HighText Machine Language', 'HyperLink and Text Markup Language', 'HighText Markup Language'],
        correctAnswer: 0
    },
    {
        type: 'lesson',
        title: 'CSS Styling',
        content: `
            <h2>Introduction to CSS</h2>
            <p>CSS (Cascading Style Sheets) is used to style and layout web pages, including design, colors, and fonts...</p>
            <img src="../assets/css.png" alt="CSS Styling">
        `
    },
    {
        type: 'question',
        question: 'What is CSS used for?',
        choices: ['Styling web pages', 'Scripting web pages', 'Database management', 'Server-side processing'],
        correctAnswer: 0
    },
    {
        type: 'lesson',
        title: 'JavaScript Fundamentals',
        content: `
            <h2>Basics of JavaScript</h2>
            <p>JavaScript is a programming language that enables interactive web pages. It is an essential part of web development...</p>
            <img src="../assets/js.png" alt="JavaScript Fundamentals">
        `
    },
    {
        type: 'question',
        question: 'What is JavaScript primarily used for?',
        choices: ['Creating interactive effects', 'Styling web pages', 'Structuring web pages', 'Managing databases'],
        correctAnswer: 0
    },
    {
        type: 'lesson',
        title: 'Responsive Design',
        content: `
            <h2>What is Responsive Design?</h2>
            <p>Responsive design ensures that web pages look good on all devices by adjusting the layout based on the device screen size...</p>
            <img src="../assets/responsive.png" alt="Responsive Design">
        `
    },
    {
        type: 'question',
        question: 'What does responsive design achieve?',
        choices: ['Adaptation to different screen sizes', 'Static layout on all devices', 'High resolution images only', 'Server-side scripting'],
        correctAnswer: 0
    },
    {
        type: 'lesson',
        title: 'JavaScript DOM Manipulation',
        content: `
            <h2>Understanding DOM Manipulation</h2>
            <p>DOM (Document Object Model) manipulation allows JavaScript to dynamically change the content and structure of a web page...</p>
            <img src="../assets/dom.png" alt="JavaScript DOM Manipulation">
        `
    },
    {
        type: 'question',
        question: 'What is the DOM used for?',
        choices: ['Manipulating HTML and CSS', 'Creating images', 'Server-side scripting', 'Database queries'],
        correctAnswer: 0
    },
    {
        type: 'lesson',
        title: 'Web Performance Optimization',
        content: `
            <h2>Improving Web Performance</h2>
            <p>Optimizing web performance involves techniques to make web pages load faster and provide a better user experience...</p>
            <img src="../assets/performance.png" alt="Web Performance Optimization">
        `
    },
    {
        type: 'question',
        question: 'What is a common technique for optimizing web performance?',
        choices: ['Minification of files', 'Increasing image resolution', 'Using more plugins', 'Adding more content'],
        correctAnswer: 0
    }
];

function updateNavigation() {
    document.getElementById('back').disabled = currentIndex === 0;
    document.getElementById('next').disabled = currentIndex === lessons.length - 1;
}

function updateSlides() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function loadContent() {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '';

    const currentItem = lessons[currentIndex];

    if (currentItem.type === 'lesson') {
        contentDiv.innerHTML = `
            <h2>${currentItem.title}</h2>
            <div class="lesson-content">
                ${currentItem.content}
            </div>
        `;
    } else if (currentItem.type === 'question') {
        const choicesHTML = currentItem.choices.map((choice, i) => `
            <div class="choice" data-index="${i}">${choice}</div>
        `).join('');

        contentDiv.innerHTML = `
            <p id="question">${currentItem.question}</p>
            <div class="choices-grid">
                ${choicesHTML}
            </div>
        `;
    }

    updateNavigation();
    updateSlides();
}

function navigateSlides(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = lessons.length - 1; // Loop back to the end
    } else if (currentIndex >= lessons.length) {
        currentIndex = 0; // Loop back to the start
    }
    loadContent();
}

// Event listeners for navigation buttons
document.getElementById('next').addEventListener('click', () => {
    navigateSlides(1);
});

document.getElementById('back').addEventListener('click', () => {
    navigateSlides(-1);
});

// Load the initial content and slides
loadContent();
