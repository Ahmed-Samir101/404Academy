let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const lessons = [
    {
        type: 'lesson',
        title: 'CSS Basics: Styling Your Webpage?',
        content: `
            <p>What is <b style="color:blue;">CSS</b>? CSS (Cascading Style Sheets) is the language used to describe the presentation of a web page, including <i>colors</i>, <i>layout</i>, and <i>fonts</i>. It allows you to control the appearance of multiple web pages at once.
            <br><br>
                <b style="color:blue;">CSS</b> separates the content of a web page (HTML) from its presentation, making it easier to maintain and update.
                It allows for more flexibility and control in the design process, ensuring a consistent look across different pages of a website.
            </p>
            <div class="img"> <img src="../assets/css.png" alt="Web Development"> </div>
        `
    },
    {
        type: 'question',
        question: '1) What is CSS?',
        choices: ['A programming language', 'A markup language', 'A styling language', 'A database system'],
        correctAnswer: 2
    },
    {
        type: 'lesson',
        title: 'The CSS syntax',
        content: `
        <p> OK osn klndm ,kasjbf z.ksjbsm,df.,sm.jhsds
            <ul>
                <li>Selector: The selector targets the HTML element you want to style. It can be an element name, class, ID, or a more complex selector.<li>
                <div class="code" style="margin-bottom: 5px;">
                    <p>
                        h1&nbsp;<span class="angle-brackets">{</span><br>&nbsp;
                        <span class="tag">color:</span>&nbsp;<span class="keyword">blue</span><span class="angle-brackets">;</span><br>
                        <span class="angle-brackets">}</span>
                    </p>
                </div>
                In this example, the h1 selector targets all &lt;h1&gt; elements and applies the style within the curly braces.<br><br>
                <li>Property: The property is the aspect of the element you want to change. For instance, color, font-size, margin, etc.</li>
                <li>Value: The value is the specific setting for that property. It could be a color, size, or another specific descriptor.</li><br>
                <li>Example of CSS Syntax: Let's break down a CSS rule:</li>
                <div class="code">
                    <p>
                        p&nbsp;<span class="angle-brackets">{</span><br>&nbsp;
                        <span class="tag">font-size:</span>&nbsp;<span class="keyword">18px</span><span class="angle-brackets">;</span><br>&nbsp;
                        <span class="tag">color:</span>&nbsp;<span class="keyword">red</span><span class="angle-brackets">;</span><br>
                        <span class="angle-brackets">}</span>
                    </p>
                </div>
                <li>Selector: p targets all paragraph (&ltp&gt;) elements.</li>
                <li>Property: font-size and color.</li>
                <li>Value: 18px for font-size and darkgray for color.</li>
            </ul>
        </p>
        `
    },
    {
        type: 'question',
        question: '2) In the CSS rule h1 { color: blue; }, what does the h1 represent?',
        choices: ['Property', 'Selector', 'Value', 'Element'],
        correctAnswer: 1
    },
    {
        type: 'lesson',
        title: 'Applying CSS:',
        content: `
        <!DOCTYPE html>
        <html>
          <body>
            <p> Now let's learn how to use CSS inside of an HTML file
              <ul>
                  <li>Inline CSS: Inline CSS is used to apply a unique style to a single HTML element. It’s written directly in the style attribute of the HTML tag.</li>
                  <div class="code" style="margin-bottom: 5px;">
                      <p>
                      <span class="angle-brackets">&lt;</span><span class="tag">p</span>
                      <span class="attribute">style</span>=<span class="string">"color: red;"</span><span class="angle-brackets">&gt;</span>
                      Click me!<span class="angle-brackets">&lt;/</span><span class="tag">p</span><span class="angle-brackets">&gt;</span>
                      </p>
                  </div>
                  This will make the text inside the paragraph bold and red.<br><br>
                  
                  <li>Internal CSS: Internal CSS is used to define styles for a single HTML document. It’s written inside a &ltstyle&gt; element, within the &lthead&gt; section of the HTML document.</li>
                  <div class="code">
                      <p>
                          <span class="angle-brackets">&lt;</span><span class="tag">html</span><span class="angle-brackets">&gt;</span><br>&nbsp;
                          <span class="angle-brackets">&lt;</span><span class="tag">style</span><span class="angle-brackets">&gt;</span><br>&nbsp;
                              p&nbsp;<span class="angle-brackets">{</span><br>&nbsp;&nbsp;
                              <span class="tag">font-size:</span>&nbsp;<span class="keyword">18px</span><span class="angle-brackets">;</span><br>&nbsp;&nbsp;
                              <span class="tag">color:</span>&nbsp;<span class="keyword">red</span><span class="angle-brackets">;</span><br>&nbsp;&nbsp;
                              <span class="angle-brackets">}</span><br>&nbsp;
                          <span class="angle-brackets">&lt;</span><span class="tag">/style</span><span class="angle-brackets">&gt;</span><br>
                          <span class="angle-brackets">&lt;</span><span class="tag">/html</span><span class="angle-brackets">&gt;</span>
                      </p>
                  </div>
                  This example sets the font size and line height for all &lt;p&gt; elements.
                  <li>External CSS: External CSS is used to apply styles to multiple web pages. It involves linking an external .css file to your HTML document.</li>
                  <div class="code">
                    <p>
                        <span class="angle-brackets">&lt;</span><span class="tag">head</span><span class="angle-brackets">&gt;</span><br>&nbsp;
                        <span class="angle-brackets">&lt;</span><span class="tag">link</span>
                        <span class="attribute">rel</span>=<span class="string">"stylesheet"</span><span class="angle-brackets">&gt;</span>
                        <span class="attribute">href</span>=<span class="string">"styles.css"</span><span class="angle-brackets">&gt;</span><br>
                        <span class="angle-brackets">&lt;</span><span class="tag">/head</span><span class="angle-brackets">&gt;</span>
                    </p>
                </div>
              </ul>
          </p>
          </body>
        </html>
        `
    },
    {
        type: 'arrange',
        question: '3) Which tag is used for external CSS?',
        content: `
        <ul class="sortable-list">
        <li class="item" draggable="true">
          <div class="details">
            <span>2</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>1</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>3</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>4</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
        <li class="item" draggable="true">
          <div class="details">
            <span>5</span>
          </div>
          <i class="uil uil-draggabledots"></i>
        </li>
      </ul>
        `,
        correctOrder: [
            '1',
            '2',
            '3',
            '4',
            '5'
        ]
    },
    {
        type: 'question',
        question: 'What is JavaScript primarily used for?',
        choices: ['Creating interactive effects', 'Styling web pages', 'Structuring web pages', 'Managing databases'],
        correctAnswer: 0
    },
    // {
    //     type: 'lesson',
    //     title: 'The Basic Structure of an HTML Document',
    //     content: `
    //     <p>Objective: Learn the basic structure of an HTML document.
    //     Content:
    //     An HTML document typically starts with a <b style="color:orange;">&lt!DOCTYPE html&gt</b>; declaration.
    //     It is followed by <b style="color:orange;">&lthtml&gt;</b>, <b style="color:orange;">&lthead&gt</b>, and <b style="color:orange;">&ltbody&gt</b> tags.
    //     </p>
    //     <div class="code">
    //         <p>
    //             <span class="angle-brackets">&lt;</span><span class="tag">html</span><span class="angle-brackets">&gt;</span>
    //         </p>
    //         <p>  <span class="comment">&lt;!-- This is a comment --&gt;</span></p>
    //         <p>
    //             <span class="angle-brackets">&lt;</span><span class="tag">h1</span>
    //             <span class="attribute">style</span>=<span class="string">"color: red;"</span>
    //             <span class="angle-brackets">&gt;</span>Hello World<span class="angle-brackets">&lt;/</span><span class="tag">h1</span><span class="angle-brackets">&gt;</span>
    //         </p>
    //         <p><span class="angle-brackets">&lt;/</span><span class="tag">html</span><span class="angle-brackets">&gt;</span></p>
    //     </div>
    //     `
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

