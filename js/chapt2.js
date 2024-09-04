let currentIndex = 9;

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
    },
    {
        type: 'lesson',
        title: '',
        content: `
        <h1 style="color:red;text-align:center; margin-top:0;"">Fantastic work! 🎉</h1>
        <p>Now, let's dive into the next chapter, where we'll explore CSS. You'll discover how to style and customize your website, making it truly your own. Excited? I know I am! Let's get started! 🚀</p>
            <div class="next-chapt">
            <a href="chapt3.html">
                <button class="next-chapt">Chapter 3</button>
            </a>
            </div>
        <div class="img"> <img src="../assets/under-construction.jpg" alt="Web Development"> </div>
        `
    }
];

