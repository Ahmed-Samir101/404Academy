let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const lessons = [
    {
        type: 'question',
        question: 'What was ARPANET?',
        choices: ['A dinosaur communication system', 'A home computer', 'The first computer network', 'A jigsaw puzzle method'],
        correctAnswer: 2
    },
    {
        type: 'question',
        question: 'In the analogy of browsing the web, what role does the server play?',
        choices: ['The customer', 'The waiter', 'The menu', 'The chef'],
        correctAnswer: 3
    },
    {
      type: 'question',
      question: 'At its simplest, what is a web page?',
      choices: ['A collection of email addresses stored on the internet', 'A document that contains text, images, and links, and is displayed in a web browser', 'A program that runs on a server to manage data', 'A file used for sending messages over the internet'],
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
        type: 'question',
        question: '2) What is the primary role of HTML in web development?',
        choices: ['Interactivity', 'Structure', 'Styling', 'Data storage'],
        correctAnswer: 1
    },
    {
        type: 'question',
        question: '3) What is the primary function of JavaScript in web development?',
        choices: ['Data Storage', 'Structure', 'Styling', 'Interactivity'],
        correctAnswer: 3
    },
    {
        type: 'question',
        question: '4) Which tag is used to create a link?',
        choices: ['&ltlink&gt', '&lth1&gt', '&ltp&gt', '&lta&gt'],
        correctAnswer: 3
    },
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
    },
    {
        type: 'question',
        question: '1) What is CSS?',
        choices: ['A programming language', 'A markup language', 'A styling language', 'A database system'],
        correctAnswer: 2
    },
    {
        type: 'question',
        question: '2) In the CSS rule h1 { color: blue; }, what does the h1 represent?',
        choices: ['Property', 'Selector', 'Value', 'Element'],
        correctAnswer: 1
    },
    {
        type: 'arrange',
        question: '3) Rearrange the tags into the correct order!',
        content: `
        <ul class="sortable-list">
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;/style&gt;</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>p {</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>}</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>color: red;</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;style&gt;</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
      </ul>
        `,
        correctOrder: [
            '<style>',
            'p {',
            'color: red;',
            '}',
            '</style>'
        ]
    },
    {
        type: 'arrange',
        question: '4) Rearrange the tags into the correct order!',
        content: `
        <ul class="sortable-list">
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;body&gt;</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;/html&gt;</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;/head&gt;</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;html&gt</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;/body&gt;</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;h1&gth1&lt;/h1&gt</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;head&gt;</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>&lt;link rel="stylesheet" href="style.css"&gt;</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
      </ul>
        `,
        correctOrder: [
            '<html>',
            '<head>',
            '<link rel="stylesheet" href="style.css">',
            '</head>',
            '<body>',
            '<h1>h1</h1>',
            '</body>',
            '</html>'
        ]
    },
    {
        type: 'question',
        question: `You are in the middle of designing your website. Where should you put your hyperlinks to other pages of the website?`,
        choices: ['Header', 'Footer', 'Content', 'Navigation'],
        correctAnswer: 3
    },
    {
        type: 'question',
        question: `What would happen when this code is run?
        <div class="code">
          <p>
              .h1&nbsp;<span class="angle-brackets">{</span><br>&nbsp;
              <span class="comment">/*margin: 20px*/</span>
              <span class="tag">font-family:</span>&nbsp;<span class="keyword">Helvetica</span><span class="angle-brackets">;</span><br>
              <span class="tag">border:</span>&nbsp;<span class="keyword">20px blue</span><span class="angle-brackets">;</span><br>
              <span class="angle-brackets">}</span>
          </p>
        </div>`,
        choices: ['h1 gains a blue border', 'h1 has a margin of 20 pixels', 'nothing', 'h1 has the serif font'],
        correctAnswer: 0
    },
    {
        type: 'question',
        question: `How to make a text in italic using CSS?`,
        choices: ['font-style: bold;', 'text-decoration: italic;', 'font-weight: italic;', 'font-style: italic;'],
        correctAnswer: 3
    },
    {
        type: 'connect-the-dots',
        question: `Match selectors to their values 
        <div class="img"> <img src="../assets/match_chapter3.png" alt="match chapter 3 question"> </div>`,
        pairs: [
            { left: '.p {}', right: 'color: red' },
            { left: '.example-class {}', right: 'color: green; font-weight: bold;' },
            { left: '#example-id {}', right: 'border: 2px solid black; font-weight: bold;' },
            { left: 'a[title="attribute selector"] {}', right: 'text-align: center' },
            { left: 'div.example-class {}', right: 'font-size: larger; text-decoration: none' }
        ],
        correctPairs: [3, 1, 0, 4, 2]
    }
];

