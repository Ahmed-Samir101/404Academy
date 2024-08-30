let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const lessons = [
    {
        type: 'lesson',
        title: 'What is Front-End Web Development?',
        content: `
            <p>Front-end web development is all about crafting the part of a website that users actually see and interact with—think of it as the stylish shop window of the web! The main tools in a front-end developer’s toolkit are <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. HTML builds the structure, CSS adds the style and flair, and JavaScript brings everything to life with interactive features. Together, they create the magic that makes websites look and feel awesome.</p>
            <div class="img"> <img src="../assets/frontend-vs-backend.png" alt="Web Development"> </div>
        `
    },
    {
        type: 'question',
        question: '1) Which one make the webpage interactive?',
        choices: ['HTML', 'CSS', 'JavaScript', 'Python'],
        correctAnswer: 2
    },
    {
        type: 'lesson',
        title: 'The Foundation of Frontend – HTML',
        content: `
        <p>HTML (HyperText Markup Language) is the backbone of any website. It structures the content by defining elements like headings, paragraphs, images, and links. Think of it as the skeleton of a webpage—without it, there would be no content for users to see.</p>
        <div class="code">
            <p>
                <span class="angle-brackets">&lt;</span><span class="tag">html</span><span class="angle-brackets">&gt;</span>
            </p>
            <p>  <span class="comment">&lt;!-- This is a comment --&gt;</span></p>
            <p>
                <span class="angle-brackets">&lt;</span><span class="tag">h1</span>
                <span class="attribute">style</span>=<span class="string">"color: red;"</span>
                <span class="angle-brackets">&gt;</span>Hello World<span class="angle-brackets">&lt;/</span><span class="tag">h1</span><span class="angle-brackets">&gt;</span>
            </p>
            <p><span class="angle-brackets">&lt;/</span><span class="tag">html</span><span class="angle-brackets">&gt;</span></p>
        </div>
    </div>
        `
    },
    {
        type: 'question',
        question: '2) What is the primary role of HTML in web development?',
        choices: ['Interactivity', 'Structure', 'Styling', 'Data storage'],
        correctAnswer: 1
    },
    {
        type: 'lesson',
        title: 'Adding Style and Interactivity – CSS & JavaScriptL',
        content: `
        <p><b style="color:blue;">CSS</b> (Cascading Style Sheets) is what makes your website look good. It controls the appearance of HTML elements, allowing you to add colors, adjust layouts, and create a visually appealing site.
        <br>
        <b style="color:#cfb80e;">JavaScript</b> adds interactivity. It’s a programming language that makes your website dynamic, enabling features like interactive forms, animations, and more. It’s what turns a static webpage into something users can engage with.
        </p>
        <div class="img"> <img src="../assets/hcj.png" alt="meme"> </div>
        `
    },
    {
        type: 'question',
        question: '3) What is the primary function of JavaScript in web development?',
        choices: ['Data Storage', 'Structure', 'Styling', 'Interactivity'],
        correctAnswer: 3
    },
    {
        type: 'lesson',
        title: 'The Basic Structure of an HTML Document',
        content: `
        <p>Objective: Learn the basic structure of an HTML document.
        Content:
        An HTML document typically starts with a <b style="color:orange;">&lt!DOCTYPE html&gt</b>; declaration.
        It is followed by <b style="color:orange;">&lthtml&gt;</b>, <b style="color:orange;">&lthead&gt</b>, and <b style="color:orange;">&ltbody&gt</b> tags.
        </p>
        <div class="code">
            <p>
                <span class="angle-brackets">&lt;</span><span class="tag">html</span><span class="angle-brackets">&gt;</span>
            </p>
            <p>  <span class="comment">&lt;!-- This is a comment --&gt;</span></p>
            <p>
                <span class="angle-brackets">&lt;</span><span class="tag">h1</span>
                <span class="attribute">style</span>=<span class="string">"color: red;"</span>
                <span class="angle-brackets">&gt;</span>Hello World<span class="angle-brackets">&lt;/</span><span class="tag">h1</span><span class="angle-brackets">&gt;</span>
            </p>
            <p><span class="angle-brackets">&lt;/</span><span class="tag">html</span><span class="angle-brackets">&gt;</span></p>
        </div>
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
        title: 'Basic HTML Tags',
        content: `
        <p>•HTML uses tags to define elements on a webpage. Most tags come in pairs: an opening tag &lttag&gt and a closing tag &lt/tag&gt.
        Common Tags:
            <ul>
                <li>&lth1&gt to &lth6&gt: Heading tags. &lth1&gt is the largest heading, &lth6&gt is the smallest.</li>
                <div class="code">
                    <p>
                        <span class="angle-brackets">&lt;</span><span class="tag">h1</span><span class="angle-brackets">&gt;</span>Hello World!<span class="angle-brackets">&lt;/</span><span class="tag">h1</span><span class="angle-brackets">&gt;</span>
                        <br>
                        <span class="angle-brackets">&lt;</span><span class="tag">h3</span><span class="angle-brackets">&gt;</span>Hello World!<span class="angle-brackets">&lt;/</span><span class="tag">h3</span><span class="angle-brackets">&gt;</span>
                        <br>
                        <span class="angle-brackets">&lt;</span><span class="tag">h6</span><span class="angle-brackets">&gt;</span>Hello World!<span class="angle-brackets">&lt;/</span><span class="tag">h6</span><span class="angle-brackets">&gt;</span>
                    </p>
                </div>
                <li>Paragraph (&ltp&gt): Used for blocks of text</li>
                <div class="code">
                    <p>
                        <span class="angle-brackets">&lt;</span><span class="tag">p</span><span class="angle-brackets">&gt;</span>I love web development!<span class="angle-brackets">&lt;/</span><span class="tag">p</span><span class="angle-brackets">&gt;</span>
                    </p>
                </div>
                <li>Links (&lta&gt): Create clickable links</li>
                <div class="code">
                    <p>
                    <span class="angle-brackets">&lt;</span><span class="tag">a</span>
                    <span class="attribute">href</span>=<span class="string">"index.html"</span>
                    <span class="angle-brackets">&gt;</span>Click me!<span class="angle-brackets">&lt;/</span><span class="tag">a</span><span class="angle-brackets">&gt;</span>
                    </p>
                </div>
            </ul>
        </p>
        <div class="codeimg"> <img src="../assets/code1.png" alt="Web Development"> </div>
        `
    },
    {
        type: 'question',
        question: '4) Which tag is used to create a link?',
        choices: ['&ltlink&gt', '&lth1&gt', '&ltp&gt', '&lta&gt'],
        correctAnswer: 3
    },
    {
        type: 'lesson',
        title: 'Building a Simple Webpage',
        content: `
        <p>Now lets combine what we have learned so far to create your first webpage!
            <ul>
                <li>Use the tags you’ve learned (&lth1&gt, &ltp&gt, &lta&gt) to structure your content.</li>
                <div class="code">
                    <p>
                        <span class="angle-brackets">&lt;</span><span class="tag">!DOCTYPE html</span><span class="angle-brackets">&gt;</span>
                        <br>
                        <span class="angle-brackets">&lt;</span><span class="tag">html</span><span class="angle-brackets">&gt;
                        <br>&nbsp;
                        <span class="angle-brackets">&lt;</span><span class="tag">body</span><span class="angle-brackets">&gt;
                        <br>&nbsp;&nbsp;
                        <span class="angle-brackets">&lt;</span><span class="tag">h1</span><span class="angle-brackets">&gt;</span>Hello World!<span class="angle-brackets">&lt;/</span><span class="tag">h1</span><span class="angle-brackets">&gt;</span>
                        <br>&nbsp;&nbsp;
                        <span class="angle-brackets">&lt;</span><span class="tag">p</span><span class="angle-brackets">&gt;</span>I am learning web development, yay!<span class="angle-brackets">&lt;/</span><span class="tag">p</span><span class="angle-brackets">&gt;</span>
                        <br>&nbsp;&nbsp;
                        <span class="angle-brackets">&lt;</span><span class="tag">a</span>
                        <span class="attribute">href</span>=<span class="string">"index.html"</span>
                        <span class="angle-brackets">&gt;</span>Click me!<span class="angle-brackets">&lt;/</span><span class="tag">a</span><span class="angle-brackets">&gt;</span>
                        <br>&nbsp;
                        <span class="angle-brackets">&lt;</span><span class="tag">/body</span><span class="angle-brackets">&gt;
                        <br>
                        <span class="angle-brackets">&lt;</span><span class="tag">/html</span><span class="angle-brackets">&gt;

                    </p>
                </div>
            </ul>
        </p>
        <div class="codeimg"> <img src="../assets/code2.png" alt="Web Development"> </div>
        `
    },
    {
        type: 'lesson',
        title: 'Working with Images in HTML',
        content: `
        <p>Now lets learn how to add images to your webpage!
            <ul>
                <li>You can use the &ltimg&gt tag to insert images into your webpage.</li>
                <li>The &ltimg&gt tag is self-closing, which means it doesn’t need a separate closing tag.</li>
                <li>You need to use the src attribute to specify the path to the image file and the alt attribute for alternative text.</li>
                <div class="code">
                    <p>
                        <span class="angle-brackets">&lt;</span><span class="tag">img</span>
                        <span class="attribute">src</span>=<span class="string">"path/to/your/image.jpg"</span>
                        <span class="attribute">alt</span>=<span class="string">"funny cat meme"</span>
                        <span class="angle-brackets">&gt;</span>
                    </p>
                </div>
            </ul>
        </p>
        <div class="codeimg"> <img src="../assets/code3.png" alt="Web Development"> </div>
        `
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
        type: 'connect-the-dots',
        question: 'Match the HTML tags with their functions.',
        pairs: [
            { left: '&lt;h1&gt;', right: 'Defines the largest heading' },
            { left: '&lt;p&gt;', right: 'Defines a paragraph' },
            { left: '&lt;a&gt;', right: 'Creates a hyperlink' },
            { left: '&lt;img&gt;', right: 'Inserts an image' }
        ],
        correctPairs: [0, 1, 2, 3]
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
    }, 2000);
}

loadContent();

document.getElementById('next').addEventListener('click', () => {
    navigateSlides(1);
});

document.getElementById('back').addEventListener('click', () => {
    navigateSlides(-1);
});

loadContent();

