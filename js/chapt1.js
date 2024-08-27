let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const lessons = [
    {
        type: 'lesson',
        title: 'Introduction to Web Development',
        content: `
            <p>Think of <b style="color:red;">web development</b> as the art of building your very own digital playground! It’s all about creating and maintaining websites—a bunch of connected web pages that you can explore on the internet or a private network called an intranet. Imagine a website like Wikipedia as the entire amusement park, and each page (like the one on the infamous <a href="https://en.wikipedia.org/wiki/Emu_War">Emu War</a>) as a different ride or attraction. Your job in web development? Make sure everything runs smoothly, looks awesome, and keeps visitors coming back for more fun!</p>
            <div class="img"> <img src="../assets/webdev.png" alt="Web Development"> </div>
        `
    },
    {
        type: 'lesson',
        title: 'THE INTERNETTTT!!!!',
        content: `
        <p>The internet isn't some magical place or secret platform—it's actually a super cool tool that links computers together. Imagine it like plugging your device into another one with a cable, but instead of a physical wire, the internet is this massive, invisible web connecting devices all over the world. Now, the intranet is like a private club for computers, where only the ones with special access get to join the network party.</p>
        <div class="img"> <img src="../assets/internet.jpg" alt="Web Development"> </div>
        `
    },
    {
        type: 'lesson',
        title: 'A Blast from the Past: How the Internet Was Born',
        content: `
        <p>Imagine computers in the 1960s as gigantic, pricey machines that couldn’t be moved—like having a dinosaur as a pet! To solve the problem of accessing these ancient beasts remotely and getting them to talk to each other, brilliant minds came up with <b>ARPANET</b>, the internet’s super-cool grandparent. It was the first step toward connecting computers from different locations into a magical network.<br>
        </p>
        <div class="img"> <img src="../assets/dino.png" alt="Web Development"> </div>
        `
    },
    {
        type: 'lesson',
        title: 'A Blast from the Past: How the Internet Was Born',
        content: `
        <p>The idea? Break down big chunks of data into tiny, bite-sized pieces called <b style="color:orange;">‘packets.’</b> Think of it like mailing a jigsaw puzzle: you send each piece separately, and they all come together at the end to form a complete picture. By the way, that’s how websites travel across the web, too!<br><br>
        As home computers started popping up in the 1970s and 1980s, more and more of these machines joined the digital party, laying the foundation for the internet we know and love today.</p>
        <div class="img"> <img src="../assets/dino.png" alt="Web Development"> </div>
        `
    },
    // {
    //     type: 'question',
    //     question: 'What is CSS used for?',
    //     choices: ['Styling web pages', 'Scripting web pages', 'Database management', 'Server-side processing'],
    //     correctAnswer: 0
    // },
    {
        type: 'lesson',
        title: 'Clients and Servers: A Techy Restaurant Tale',
        content: `
        <p>In the world of technology, a client is like the hungry customer at a <i style="color:orange;">restaurant</i>, craving delicious data. When you browse the web, your computer (the client) is placing an order for some tasty information from a website.<br> Now, who takes this order? Enter the internet—the speedy waiter who zips over to the kitchen (a.k.a. the server). The server is the chef behind the scenes, cooking up exactly what you ordered—be it a webpage, a video, or some cat memes—and sends it back through the waiter (the internet) to satisfy your digital hunger.
        <br>
        Just like in a real restaurant, where the kitchen might be hidden away, the server computer could be located far, far away, but thanks to our trusty waiter, you get exactly what you asked for, served up fresh on your screen!</p>
        <div class="img"> <img src="../assets/resturant.jpg" alt="Web Development"> </div>
        `
    },
    // {
    //     type: 'question',
    //     question: 'What is JavaScript primarily used for?',
    //     choices: ['Creating interactive effects', 'Styling web pages', 'Structuring web pages', 'Managing databases'],
    //     correctAnswer: 0
    // },
    {
        type: 'lesson',
        title: 'What is a Web Browser?',
        content: `
        <p>Think of a web browser as your trusty guide to the wild, wild web! It’s a piece of software that helps you explore the vast internet landscape with ease. Sure, you could technically access the internet without one, but why take the long way when you can have a browser lead the way, pointing out all the cool stuff?
        <br><br>
        A web browser takes the raw ingredients of a website—like HTML files—and cooks them up into a beautifully presented page, ready for you to enjoy. There are lots of different web browsers out there, so it’s important to make sure your website looks great no matter which one your visitors are using.</p>
        <div class="img"> <img src="../assets/iememe.webp" alt="Web Development"> </div>
        `
    },
    // {
    //     type: 'question',
    //     question: 'What does responsive design achieve?',
    //     choices: ['Adaptation to different screen sizes', 'Static layout on all devices', 'High resolution images only', 'Server-side scripting'],
    //     correctAnswer: 0
    // },
    {
        type: 'lesson',
        title: 'Coming soon...',
        content: `
        <p>Stay tuned for more content and <b>Interactive quizzes</b>!</p>
        <div class="img"> <img src="../assets/under-construction.jpg" alt="Web Development"> </div>
        `
    },
    // {
    //     type: 'question',
    //     question: 'What is the DOM used for?',
    //     choices: ['Manipulating HTML and CSS', 'Creating images', 'Server-side scripting', 'Database queries'],
    //     correctAnswer: 0
    // },
    // {
    //     type: 'lesson',
    //     title: 'Web Performance Optimization',
    //     content: `
    //         <h2>Improving Web Performance</h2>
    //         <p>Optimizing web performance involves techniques to make web pages load faster and provide a better user experience...</p>
    //         <img src="../assets/performance.png" alt="Web Performance Optimization">
    //     `
    // },
    // {
    //     type: 'question',
    //     question: 'What is a common technique for optimizing web performance?',
    //     choices: ['Minification of files', 'Increasing image resolution', 'Using more plugins', 'Adding more content'],
    //     correctAnswer: 0
    // }
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
