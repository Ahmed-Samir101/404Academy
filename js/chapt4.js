
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;


const lessons = [
    {
        type: 'lesson',
        title: 'JavaScript Basics: Introduction to JavaScript',
        content: `
            <p>What is <b style="color:blue;">JavaScript</b>? JavaScript is a versatile programming language primarily used for creating dynamic and interactive effects on web pages. It allows you to add logic, manipulate the DOM, and handle events.</p>
            <div class="img"><img src="../assets/js.png" alt="JavaScript"></div>
        `
    },
    {
        type: 'question',
        question: '1) What is the primary use of JavaScript in web development?',
        choices: ['Styling web pages', 'Creating dynamic and interactive effects', 'Managing databases', 'Structuring web content'],
        correctAnswer: 1
    },
    {
        type: 'lesson',
        title: 'Variables and Data Types',
        content: `
            <p>In JavaScript, variables are used to store data values. You can declare a variable using <code>let</code>, <code>const</code>, or <code>var</code>:</p>
            <div class="code">
                <p>
                    let age = 25;<br>
                    const name = 'John';<br>
                    var isStudent = true;
                </p>
            </div>
            <p>JavaScript supports various data types, such as numbers, strings, and booleans.</p>
        `
    },
    {
        type: 'question',
        question: '2) Which keyword is used to declare a variable that cannot be reassigned?',
        choices: ['let', 'var', 'const', 'function'],
        correctAnswer: 2
    },
    {
        type: 'lesson',
        title: 'Functions in JavaScript',
        content: `
            <p>Functions are blocks of code designed to perform a specific task. They can take parameters and return values.</p>
            <div class="code">
                <p>
                    function greet(name) {<br>&nbsp;&nbsp;
                    return 'Hello ' + name;<br>
                    }<br><br>
                    greet('Alice'); // Returns 'Hello Alice'
                </p>
            </div>
        `
    },
    {
        type: 'question',
        question: '3) What does the previous function return: <code>greet("World")</code>?',
        choices: ['Hello', 'Hello World', 'World', 'Hi World'],
        correctAnswer: 1
    },
    {
        type: 'lesson',
        title: 'JavaScript Operators',
        content: `
            <p>Operators are used to perform operations on variables and values. Common operators include:</p>
            <ul>
                <li>Addition: <code>+</code></li>
                <li>Subtraction: <code>-</code></li>
                <li>Multiplication: <code>*</code></li>
                <li>Division: <code>/</code></li>
            </ul>
            <div class="code">
                <p>
                    let sum = 10 + 5;<br>
                    let difference = 10 - 5;<br>
                    let product = 10 * 5;<br>
                    let quotient = 10 / 5;
                </p>
            </div>
        `
    },
    {
        type: 'question',
        question: '4) What does the following expression evaluate to: <code>console.log(10 * 2)</code>?',
        choices: ['20', '5', '12', '30'],
        correctAnswer: 0
    },
    {
        type: 'arrange',
        question: '5) Arrange the steps to declare a variable in JavaScript.',
        content: `
        <ul class="sortable-list">
        <li class="item" draggable="true">
          <div class="details">
            <span>console.log(name)</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>name = "Conan"</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>let name</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        </ul>
        `,
        correctOrder: [
            'let name',
            'name = "Conan"',
            'console.log(name)'
        ]
    },
    {
        type: 'lesson',
        title: 'Control Structures: if...else Statements',
        content: `
            <p>Control structures like <code>if...else</code> statements are used to execute different blocks of code based on certain conditions.</p>
            <div class="code">
                <p>
                    let age = 18;<br><br>
                    if (age >= 18) {<br>&nbsp;&nbsp;
                    console.log('You are an adult.');<br>
                    } else {<br>&nbsp;&nbsp;
                    console.log('You are a minor.');<br>
                    }
                </p>
            </div>
        `
    },
    {
        type: 'question',
        question: '6) In the previous code, what will be printed to the console if <code>age</code> is 20?',
        choices: ['You are an adult.', 'You are a minor.', 'Nothing', 'Error'],
        correctAnswer: 0
    },
    {
        type: 'lesson',
        title: 'Loops: for and while',
        content: `
            <p>Loops are used to repeatedly execute a block of code. Common loops in JavaScript include <code>for</code> and <code>while</code> loops.</p>
            <div class="code">
                <p>
                    for (let i = 0; i < 5; i++) {<br>&nbsp;&nbsp;
                    console.log(i);<br>
                    }<br><br>
                    let j = 0;<br>
                    while (j < 5) {<br>&nbsp;&nbsp;
                    console.log(j);<br>&nbsp;&nbsp;
                    j++;<br>
                    }
                </p>
            </div>
        `
    },
    {
        type: 'question-with-code',
        question: '7) How many times will the following loop run?',
        content: `
            <div class="code">
                <p>
                    for (let i = 0; i < 3; i++) {<br>&nbsp;&nbsp;
                    console.log(i);<br>
                    }
                </p>
            </div>
        `,
        choices: ['1', '2', '3', '4'],
        correctAnswer: 2
    },
    {
        type: 'connect-the-dots',
        question: `8) Match the JavaScript concepts to their descriptions.`,
        pairs: [
            { left: 'Variable', right: 'Stores data' },
            { left: 'Function', right: 'Performs a specific task' },
            { left: 'Loop', right: 'Repeats code execution' },
            { left: 'Condition', right: 'Executes code based on a condition' },
            { left: 'Array', right: 'Holds multiple values' }
        ],
        correctPairs: [0, 1, 2, 3, 4]
    },
    {
        type: 'lesson',
        title: 'Events in JavaScript',
        content: `
            <p>JavaScript can respond to user interactions by listening to events like clicks, key presses, or form submissions.</p>
            <div class="code">
                <p>
                    document.getElementById('myButton').addEventListener('click', function() {<br>&nbsp;&nbsp;
                    alert('Button clicked!');<br>
                    });
                </p>
            </div>
        `
    },
    {
        type: 'question',
        question: '9) Which event listener is used to handle a button click?',
        choices: ['keydown', 'click', 'mouseover', 'submit'],
        correctAnswer: 1
    },
    {
        type: 'lesson',
        title: 'DOM Manipulation',
        content: `
            <p>JavaScript allows you to manipulate the Document Object Model (DOM) to dynamically update the content of a webpage.</p>
            <div class="code">
                <p>
                    document.getElementById('myDiv').innerHTML = 'New content!';<br>
                    document.querySelector('.myClass').style.color = 'blue';
                </p>
            </div>
        `
    },
    {
        type: 'question-with-code',
        question: '10) What does this code do?',
        content: `
            <div class="code">
                <p>
                    document.getElementById('title').style.color = 'red';
                </p>
            </div>
        `,
        choices: ['Changes the text of the title', 'Changes the background color of the title', 'Changes the font size of the title', 'Changes the text color of the title'],
        correctAnswer: 3
    }
];

