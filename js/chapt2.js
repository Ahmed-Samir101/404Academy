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
    // {
    //     type: 'question',
    //     question: 'What is CSS used for?',
    //     choices: ['Styling web pages', 'Scripting web pages', 'Database management', 'Server-side processing'],
    //     correctAnswer: 0
    // },
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
    // {
    //     type: 'question',
    //     question: 'What does responsive design achieve?',
    //     choices: ['Adaptation to different screen sizes', 'Static layout on all devices', 'High resolution images only', 'Server-side scripting'],
    //     correctAnswer: 0
    // },
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

function updateNavigation() {
    document.getElementById('back').disabled = currentIndex === 0;
    document.getElementById('next').disabled = currentIndex === lessons.length - 1;
    updateProgressBar(); // Update the progress bar when navigation buttons are updated
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    const progressPercentage = ((currentIndex + 1) / lessons.length) * 100;
    progress.style.width = `${progressPercentage}%`;
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

        // Add event listeners to choices
        const choices = contentDiv.querySelectorAll('.choice');
        choices.forEach(choice => {
            choice.addEventListener('click', function() {
                const selectedIndex = parseInt(this.getAttribute('data-index'));
                verifyAnswer(selectedIndex, currentItem.correctAnswer);
            });
        });
    }

    updateNavigation();
    updateSlides();
}

function navigateSlides(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = 0; // Prevent going back past the first element
    } else if (currentIndex >= lessons.length) {
        currentIndex = lessons.length - 1; // Prevent going past the last element
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

// Load the initial content and progress bar
loadContent();
updateProgressBar(); // Initialize the progress bar on page load
