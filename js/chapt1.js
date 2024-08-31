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
    {
        type: 'question',
        question: 'What was ARPANET?',
        choices: ['A dinosaur communication system', 'A home computer', 'The first computer network', 'A jigsaw puzzle method'],
        correctAnswer: 2
    },
    {
        type: 'lesson',
        title: 'Clients and Servers: A Techy Restaurant Tale',
        content: `
        <p>In the world of technology, a client is like the hungry customer at a <i style="color:orange;">restaurant</i>, craving delicious data. When you browse the web, your computer (the client) is placing an order for some tasty information from a website.<br> Now, who takes this order? Enter the internet—the speedy waiter who zips over to the kitchen (a.k.a. the server). The server is the chef behind the scenes, cooking up exactly what you ordered—be it a webpage, a video, or some cat memes—and sends it back through the waiter (the internet) to satisfy your digital hunger.
        <br><br>
        Just like in a real restaurant, where the kitchen might be hidden away, the server computer could be located far, far away, but thanks to our trusty waiter, you get exactly what you asked for, served up fresh on your screen!</p>
        <div class="img"> <img src="../assets/resturant.jpg" alt="Web Development"> </div>
        `
    },
    {
        type: 'question',
        question: 'In the analogy of browsing the web, what role does the server play?',
        choices: ['The customer', 'The waiter', 'The menu', 'The chef'],
        correctAnswer: 3
    },
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
    {
        type: 'question',
        question: 'What is the main function of a web browser?',
        choices: ['To create HTML files', 'To guide users through the internet', 'To connect computers to the internet', 'To store website data'],
        correctAnswer: 1
    },
    // {
    //     type: 'lesson',
    //     title: 'Coming soon...',
    //     content: `
    //     <p>Stay tuned for more content and <b>Interactive quizzes</b>!</p>
    //     <div class="img"> <img src="../assets/under-construction.jpg" alt="Web Development"> </div>
    //     `
    // },
    {
        type: 'lesson',
        title: '',
        content: `
        <h1 style="color:red;text-align:center; margin-top:0;">Fantastic work! 🎉</h1>
        <p>Now, let's dive into the next chapter, where we'll explore CSS. You'll discover how to style and customize your website, making it truly your own. Excited? I know I am! Let's get started! 🚀</p>
            <div class="next-chapt">
            <a href="chapt2.html">
                <button class="next-chapt">Chapter 2</button>
            </a>
            </div>
        <div class="img"> <img src="../assets/under-construction.jpg" alt="Web Development"> </div>
        `
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

function verifyConnections() {
    console.log('Verify button clicked'); // Debug log
    const leftItems = document.querySelectorAll('.left-column .dot-item');
    const rightItems = document.querySelectorAll('.right-column .dot-item');
    
    connections.forEach(connection => {
        const isCorrect = connection.leftIndex === connection.rightIndex;
        const leftItem = leftItems[connection.leftIndex];
        const rightItem = rightItems[connection.rightIndex];

        if (isCorrect) {
            leftItem.classList.add('correct');
            rightItem.classList.add('correct');
        } else {
            leftItem.classList.add('incorrect');
            rightItem.classList.add('incorrect');
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
            <div class="img">
            <img style="marign-bottom: 25px;" src="../assets/spongebob-thinking.gif">
            </div>
            <div class="choices-grid">
                ${choicesHTML}
            </div>
        `;

        const choices = contentDiv.querySelectorAll('.choice');
        choices.forEach(choice => {
            choice.addEventListener('click', function() {
                const selectedIndex = parseInt(this.getAttribute('data-index'));
                verifyAnswer(selectedIndex, currentItem.correctAnswer);
            });
        });
    } else if (currentItem.type === 'connect-the-dots') {
        const pairsHTML = `
            <div class="connect-the-dots">
                <div class="left-column">
                    ${currentItem.pairs.map(pair => `<div class="dot-item">${pair.left}</div>`).join('')}
                </div>
                <div class="right-column">
                    ${currentItem.pairs.map(pair => `<div class="dot-item">${pair.right}</div>`).join('')}
                </div>
            </div>
        `;

        contentDiv.innerHTML = `
            <h2>${currentItem.question}</h2>
            <svg class="connection-lines" xmlns="http://www.w3.org/2000/svg"></svg>
            ${pairsHTML}
            <div class="controls">
                <button id="resetButton">Reset</button>
                <button id="verifyButton">Verify</button>
            </div>
        `;

        setupDotConnection();
        document.getElementById('next').disabled = false;
    }

    document.getElementById('resetButton').addEventListener('click', function() {
    console.log('Reset button clicked');
    resetConnections();
});

document.getElementById('verifyButton').addEventListener('click', function() {
    console.log('Verify button clicked');
    verifyConnections();
});

    updateNavigation();
    updateSlides();
}


let selectedLeft = null;
let connections = [];
let correctAnswerSelected = false;

// Initialize the dot connection setup
function setupDotConnection() {
    const leftItems = document.querySelectorAll('.left-column .dot-item');
    const rightItems = document.querySelectorAll('.right-column .dot-item');

    leftItems.forEach((item, leftIndex) => {
        item.addEventListener('click', () => {
            selectedLeft = leftIndex;
            clearSelections(leftItems);
            item.classList.add('selected');
        });
    });

    rightItems.forEach((item, rightIndex) => {
        item.addEventListener('click', () => {
            if (selectedLeft !== null) {
                const connection = {
                    leftIndex: selectedLeft,
                    rightIndex: rightIndex
                };
                connections.push(connection);

                drawConnection(leftItems[selectedLeft], item, '#007bff');
                selectedLeft = null;
                clearSelections(leftItems);
            }
        });
    });
}

// Clear selection state from the items
function clearSelections(items) {
    items.forEach(item => item.classList.remove('selected'));
}

// Draw a line between two items
function drawConnection(leftItem, rightItem, color) {
    const svg = document.querySelector('.connection-lines');
    const leftRect = leftItem.getBoundingClientRect();
    const rightRect = rightItem.getBoundingClientRect();

    const startX = leftRect.right + window.scrollX;
    const startY = leftRect.top + leftRect.height / 2 + window.scrollY;
    const endX = rightRect.left + window.scrollX;
    const endY = rightRect.top + rightRect.height / 2 + window.scrollY;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", startX);
    line.setAttribute("y1", startY);
    line.setAttribute("x2", endX);
    line.setAttribute("y2", endY);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", "2");

    svg.appendChild(line);
}

// Reset all connections and clear the SVG
function resetConnections() {
    console.log('Resetting connections...');
    connections = [];
    const svg = document.querySelector('.connection-lines');
    svg.innerHTML = '';  // Clear all drawn lines
    const dotItems = document.querySelectorAll('.dot-item');
    dotItems.forEach(item => {
        item.classList.remove('correct', 'incorrect');
        item.style.pointerEvents = ''; // Re-enable pointer events
    });
}

// Verify if the connections are correct
function verifyAnswer(selectedIndex, correctIndex) {
    const choices = document.querySelectorAll('.choice');
    const correctImage = document.getElementById('correct-image');
    const incorrectImage = document.getElementById('incorrect-image');

    if (selectedIndex === correctIndex) {
        choices[selectedIndex].style.backgroundColor = '#67d0ba';
        showPopupImage(correctImage);
        correctAnswerSelected = true;
        document.getElementById('next').disabled = false; // Enable the Next button
    } else {
        choices[selectedIndex].style.backgroundColor = '#ea5d64';
        showPopupImage(incorrectImage);
        correctAnswerSelected = false;
    }
}

// document.getElementById('resetButton').addEventListener('click', resetConnections);
// document.getElementById('verifyButton').addEventListener('click', verifyConnections);

// Initialize the game
setupDotConnection();


function updateNavigation() {
    document.getElementById('back').disabled = currentIndex === 0;
    document.getElementById('next').disabled = !correctAnswerSelected && lessons[currentIndex].type === 'question';
    updateProgressBar(); // Update the progress bar when navigation buttons are updated
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    const progressPercentage = ((currentIndex + 1) / lessons.length) * 100;
    progress.style.width = `${progressPercentage}%`;
}


function navigateSlides(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= lessons.length) {
        currentIndex = lessons.length - 1;
    }
    correctAnswerSelected = false; // Reset for the next question
    loadContent();
}

function showPopupImage(imageElement) {
    imageElement.classList.add('show');

    setTimeout(() => {
        imageElement.classList.remove('show');
    }, 1000);
}

loadContent();

document.getElementById('next').addEventListener('click', () => {
    navigateSlides(1);
});

document.getElementById('back').addEventListener('click', () => {
    navigateSlides(-1);
});

loadContent();
