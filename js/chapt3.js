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
        <p> Let's begin with selectors!
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
                Pssssttt... Order matters in CSS, the latest will be prioritised, and inline will be prioritised over external.
              </ul>
          </p>
          </body>
        </html>
        `
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
        type: 'lesson',
        title: 'Comments in CSS',
        content: `
            <p> What do you do when you want write a piece of text only for yourself?
                  You write a comment! Here's how to do it in CSS.
                  <div class="code" style="margin-bottom: 5px;">
                      <p>
                      <span class="comment">/* This is a single-line comment */</span>
                      </p>
                  </div>
                  This will make the text only visisble when accesing the code.<br><br>
          </p>
        `
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
        title: 'Color and Background',
        content: `
        <p>To make your website pop, you need to be able to add color and backgrounds.
            <ul>
                <li>In order to add color to a certain part of the website, you can add it to a selector as a property.</li>
                <div class="code">
                    <p>
                        h1&nbsp;<span class="angle-brackets">{</span><br>&nbsp;
                        <span class="tag">color:</span>&nbsp;<span class="keyword">blue</span><span class="angle-brackets">;</span><br>
                        <span class="angle-brackets">}</span>
                    </p>
                </div>
                The color value can also be replaced with:
                <li>RGB value: rgb(red, green, blue)</li>
                <li>HEX value: #rrggbb</li>
                <li>HSL value: hsl(hue, saturation, lightness)</li>
                <li>"background-" followed by color, image, repeat, attachment or position can be used to change the behaviour and properties of the background.</li>
                <div class="code">
                    <p>
                        body&nbsp;<span class="angle-brackets">{</span><br>&nbsp;
                        <span class="tag">background-color:</span>&nbsp;<span class="keyword">blue</span><span class="angle-brackets">;</span><br>
                        <span class="angle-brackets">}</span>
                    </p>
            </ul>
        </p>
        `
    },
    {
        type: 'lesson',
        title: 'Box model',
        content: `
        <p>You want your website to look well structured, right? Box models are necessary for that!
            <ul>
            What is a box model? CSS Box Model is a Fundamental concept in CSS that governs how elements are structured and positioned on a webpage.<br>
            The box model is a container that includes the following properties (ordered from the innermost property):
                <li>Content: The actual data in text, images, or other media forms can be sized using the width and height property.</li>
                <li>Padding: Padding is used to create space around the element, inside any defined border.</li>
                <li>Border: The border is used to cover the content & any padding, & also allows setting the style, color, and width of the border.</li>
                <li>Margin: Margin is used to create space around the element ie., around the border area.</li>
            </ul>
            <div class="img"> <img src="../assets/box_model.png" alt="CSS box model"> </div>
        </p>
        `
    },
    {
        type: 'lesson',
        title: 'Box model',
        content: `
        <p>Here's an example:
            <div class="code">
                    <p>
                        .box&nbsp;<span class="angle-brackets">{</span><br>&nbsp;
                        <span class="tag">width:</span>&nbsp;<span class="keyword">350px</span><span class="angle-brackets">;</span><br>&nbsp;
                        <span class="tag">height:</span>&nbsp;<span class="keyword">150px</span><span class="angle-brackets">;</span><br>&nbsp;
                        <span class="tag">margin:</span>&nbsp;<span class="keyword">10px</span><span class="angle-brackets">;</span><br>&nbsp;
                        <span class="tag">padding:</span>&nbsp;<span class="keyword">25px</span><span class="angle-brackets">;</span><br>&nbsp;
                        <span class="tag">border:</span>&nbsp;<span class="keyword">5px solid black</span><span class="angle-brackets">;</span><br>&nbsp;
                        <span class="angle-brackets">}</span>
                    </p>
                </div>
                Result:
                <div class="img"> <img src="../assets/box_model_example.png" alt="Example box model"> </div>
        </p>
        `
    },
    {
        type: 'lesson',
        title: 'Positioning',
        content: `
        <p>There will be many parts in your website, which is why it's important to be able to position them correctly.
            <ul>
            The position of an element is determined by the position property. There are five position values:
                <li>Static: this is the default position value. An element with this position value will follow the flow of the file.</li>
                <li>Relative: an element with this position value is positioned relative to its normal position.</li>
                <li>Fixed: an element with this position value has the same relative position when the viewer scrolls through the web page.</li>
                <li>Absolute: an element with this position value in taken out of the normal document flow.</li>
                <li>Sticky: an element with this position value combines relative and fixed features. The element is treated as position: relative until it reaches a specified threshold, then it becomes position: fixed.</li>
            </ul>
        </p>
        `
    },
    {
      type: 'lesson',
      title: 'Website layout',
      content: `
      <p>While you can arrange your website however you want, there are conventions.<br>
      Generally speaking there are five sections in a website:
      <ul>
        <li>Header</li>
        <li>Navigation menu</li>
        <li>Main content</li>
        <li>Content</li>
        <li>Footer</li>
      </ul>
      <div class="img"> <img src="../assets/website_layout.png" alt="Website layout"> </div>
      </p>
      `
    },
    {
      type: 'lesson',
      title: 'Typography',
      content: `
      <p>Text is an important element to a website and there are ways to make them look more prominent.<br>
      Selecting the right font and color for your text can make or break your website.
      <ul>
        <li>Header</li>
        <li>Navigation menu</li>
        <li>Main content</li>
        <li>Content</li>
        <li>Footer</li>
      </ul>
      <div class="img"> <img src="../assets/website_layout.png" alt="Website layout"> </div>
      </p>
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

