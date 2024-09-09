let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const lessons = [
  {
    type: 'lesson',
    title: 'You made it🎉!!',
    content: `<p> After mastering the essentials of HTML, CSS, and JavaScript, you're now ready to bring it all together. This project is your chance to take everything you've learned and turn it into something amazing.</p>
        <div class="img"><img src="../assets/finalprojectintro.png" alt="intro"></div>
    `
},
    {
        type: 'arrange',
        question: '1) Arrange the following HTML elements to create a basic webpage structure:',
        content: `
            <ul class="sortable-list">
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&lt;/html&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&lt;html&gt;</span>
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
                        <span>&lt;/head&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&lt;body&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&lt;/body&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
            </ul>
        `,
        correctOrder: [
            '<html>',
            '<head>',
            '</head>',
            '<body>',
            '</body>',
            '</html>'
        ]
    },
    {
      type: 'question',
      question: '2) Now lets make a simple "Hello World" to test things out in the biggest header',
      choices: ['&lt;h6&gt;Hello World&lt;/h6&gt;', '&lt;header1&gt;Hello World&lt;/header1&gt;', '&lt;h1&gt;Hello World&lt;/h1&gt;', '&lt;high&gt;Hello World&lt;/high&gt;'],
      correctAnswer: 2
  },
    { type: 'checkbox',
        question: ' 3) Select the CSS properties needed to style the button',
        content: `
          <div id="checkbox-question" class="checkbox-container">
            <div class="checkbox-item">
                <input type="checkbox" id="option1" value="padding: 10px 20px;">
                <label for="option1">padding: 10px 20px;</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="option2" value="color: white;">
                <label for="option2">color: white;</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="option3" value="3">
                <label for="option3">border-radius: none;</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="option4" value="border-radius: 5px;">
                <label for="option4">border-radius: 5px;</label>
            </div>
          </div>
          <img src="../assets/btnnn.png">
        `,
        correctAnswers: [
            'padding: 10px 20px;',
            'color: white;',
            'border-radius: 5px;'
        ]
      },
      {
        type: 'arrange',
        question: '3) Arrange the following HTML elements to create the webpage you see',
        content: `
            <ul class="sortable-list">
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&lt;div class="container"&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&lt;/div&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&lt;p id="bio"&gt;Text goes here&lt;/p&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&lt;button onclick="changeBio()"&gt;Change Bio&lt;/button&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&lt;h1 id="name"&gt;Your Name&lt;/h1&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
                <li class="item" draggable="true">
                    <div class="details">
                        <span>&ltimg id="profile-pic" src="your-image-path.jpg" alt="Profile Picture"&gt;</span>
                    </div>
                    <i class="uil uil-draggabledots"></i>
                </li>
            </ul>
            <img src="../assets/page4.png">
        `,
        correctOrder: [
            '<div class="container">',
            '<h1 id="name">Your Name</h1>',
            '<img id="profile-pic" src="your-image-path.jpg" alt="Profile Picture">',
            '<p id="bio">Text goes here</p>',
            '<button onclick="changeBio()">Change Bio</button>',
            '</div>'
        ]
    },
    { type: 'checkbox',
    question: ' 4) Now we want to center everything in the "content" div',
    content: `
      <div id="checkbox-question" class="checkbox-container">
        <div class="checkbox-item">
            <input type="checkbox" id="option1" value="align-items: middle;">
            <label for="option1">align-items: middle;</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" id="option2" value="justify-content: center;">
            <label for="option2">justify-content: center;</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" id="option3" value="display: flex;">
            <label for="option3">display: flex;</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" id="option4" value="align-items: center;">
            <label for="option4">align-items: center;</label>
        </div>
      </div>
      <img src="../assets/page3.png">
    `,
    correctAnswers: [
        'display: flex;',
        'justify-content: center;',
        'align-items: center;'
    ]
  },
  { 
    type: 'checkbox',
   question: ' 5) The image is too big! Let\'s make it a bit smaller (squared) and round it a bit',
  content: `
    <div id="checkbox-question" class="checkbox-container">
      <div class="checkbox-item">
          <input type="checkbox" id="option1" value="width: 100px;">
          <label for="option1">width: 100px;</label>
      </div>
      <div class="checkbox-item">
          <input type="checkbox" id="option2" value="height: 100px;">
          <label for="option2">height: 100px;</label>
      </div>
      <div class="checkbox-item">
          <input type="checkbox" id="option3" value="border-radius: 50%;">
          <label for="option3">border-radius: 50%;</label>
      </div>
      <div class="checkbox-item">
          <input type="checkbox" id="option4" value="border-radius: 10px;">
          <label for="option4">border-radius: 10px;</label>
      </div>
    </div>
    <img src="../assets/page5.png">
  `,
  correctAnswers: [
      'width: 100px;',
      'height: 100px;',
      'border-radius: 50%;',
  ]
},
{
  type: 'lesson',
  title: 'Press the button!!!',
  content: `
      <div class="next-chapt">
      <a href="congrats.html">
          <button class="next-chapt">Press Me</button>
      </a>
      </div>
  <div class="img"> <img src="../assets/happy-clapping.gif" alt="yooooooooooo"> </div>
  `
}
];
