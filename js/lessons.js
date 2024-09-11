// vars
const correctImage = document.getElementById('correct-image');
const incorrectImage = document.getElementById('incorrect-image');
const correctSound = new Audio('../assets/correct.mp3');
const incorrectSound = new Audio('../assets/bonk.mp3');
const popSound = new Audio('../assets/pop.mp3');
const pop2Sound = new Audio('../assets/pop2.mp3');
const loggedInUser = localStorage.getItem('loggedInUser');

const imagePaths = [
    "../assets/spongebob-thinking.gif",
    "../assets/math1.gif",
    "../assets/math2.gif",
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
    let isCorrect = true;
    const userConnections = [...connections]; // Clone the connections array

    console.log("User connections:", connections);
    console.log("Correct pairs:", lessons[currentIndex].correctPairs);

    if (userConnections.length !== lessons[currentIndex].correctPairs.length) {
        console.log("Mismatch in the number of connections.");
        isCorrect = false;
    } else {
        // Loop over each correct pair
        lessons[currentIndex].correctPairs.forEach((correctRightIndex, leftIndex) => {
            const correctLeft = lessons[currentIndex].pairs[leftIndex].left.trim();
            const correctRight = lessons[currentIndex].pairs[correctRightIndex].right.trim();

            // Find the matching user connection
            const matchingConnection = userConnections.find(connection => {
                const connectionLeftTrimmed = connection.left.trim();
                const connectionRightTrimmed = connection.right.trim();
                return decodeHTML(correctLeft) === decodeHTML(connectionLeftTrimmed) &&
                       correctRight === connectionRightTrimmed;
            });

            if (matchingConnection) {
                // Remove the matched connection from the array so it won't be checked again
                userConnections.splice(userConnections.indexOf(matchingConnection), 1);
            } else {
                // If no match was found, the connection is incorrect
                console.log(`No match found for pair ${leftIndex + 1}.`);
                isCorrect = false;
            }
        });
    }

    if (isCorrect) {
        console.log("All connections are correct.");
        showPopupImage(correctImage);
        correctSound.play();
        correctAnswerSelected = true;
        document.getElementById('next').disabled = false;
    } else {
        console.log("Some connections are incorrect.");
        showPopupImage(incorrectImage);
        incorrectSound.play();
        correctAnswerSelected = false;
        document.getElementById('next').disabled = true;
    }
}


// Function to decode HTML entities
function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}


function loadContent() {
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '';

    const currentItem = lessons[currentIndex];
    const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];

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
                <img style="margin-bottom: 25px;" src="${randomImagePath}">
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
    }else if (currentItem.type === 'question-with-code') {
        const choicesHTML = currentItem.choices.map((choice, i) => `
            <div class="choice" data-index="${i}">${choice}</div>
        `).join('');

        contentDiv.innerHTML = `
            <p id="question">${currentItem.question}</p>
            <div class="lesson-content">
                ${currentItem.content}
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
    }  else if (currentItem.type === 'connect-the-dots') {
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
        
        document.getElementById('next').disabled = true;
        setupDotConnection();
        document.getElementById('resetButton').addEventListener('click', resetConnections);
        document.getElementById('verifyButton').addEventListener('click', verifyConnections);
    } else if (currentItem.type === 'arrange') {
        contentDiv.innerHTML = `
            <h2>${currentItem.question}</h2>
            ${currentItem.content}
            <div class="controls">
                <button id="verifyArrangeButton">Verify</button>
            </div>
        `;

        document.getElementById('next').disabled = true; // Disable "Next" button initially

        setupSortableList();
        document.getElementById('verifyArrangeButton').addEventListener('click', function() {
            verifyArrangeOrder();
        });
    } else if (currentItem.type === 'checkbox') {
        contentDiv.innerHTML = `
            <h2>${currentItem.question}</h2>
            ${currentItem.content}
            <div class="controls">
                <button id="verifyCheckboxButton">Verify</button>
            </div>
        `;

        document.getElementById('next').disabled = true;
        document.getElementById('verifyCheckboxButton').addEventListener('click', verifyCheckboxAnswer);
    }
    updateNavigation();
    updateSlides();
}

function verifyArrangeOrder() {
    const items = document.querySelectorAll('.sortable-list .item');
    let correctOrder = true;
    const loggedInUser = localStorage.getItem('loggedInUser');

    items.forEach((item, index) => {
        const expectedName = lessons[currentIndex].correctOrder[index];
        const actualName = item.querySelector('.details span').textContent;

        if (expectedName !== actualName) {
            correctOrder = false;
        }
    });

    if (correctOrder) {
        showPopupImage(correctImage);
        correctSound.play();
        incrementEXP(loggedInUser);
        document.getElementById('next').disabled = false;
    } else {
        showPopupImage(incorrectImage);
        incorrectSound.play();
        decrementEXP(loggedInUser);
        document.getElementById('next').disabled = true;
    }
}

function setupSortableList() {
    const sortableList = document.querySelector('.sortable-list');
    const items = sortableList.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', drop);
        item.addEventListener('dragend', dragEnd);
    });

    let draggedItem = null;

    function dragStart(e) {
        draggedItem = this;
        setTimeout(() => {
            this.classList.add('hidden');
        }, 0);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        if (this !== draggedItem) {
            let allItems = [...sortableList.querySelectorAll('.item')];
            let currentPos = allItems.indexOf(draggedItem);
            let newPos = allItems.indexOf(this);

            if (currentPos < newPos) {
                this.after(draggedItem);
            } else {
                this.before(draggedItem);
            }
        }
    }

    function dragEnd(e) {
        this.classList.remove('hidden');
        draggedItem = null;
    }
}

function verifyCheckboxAnswer() {
    const checkboxes = document.querySelectorAll('#checkbox-question input[type="checkbox"]');
    const selectedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const correctAnswers = lessons[currentIndex].correctAnswers;

    // Check if selected values match correct answers
    const isCorrect = selectedValues.length === correctAnswers.length &&
        selectedValues.every(value => correctAnswers.includes(value)) &&
        correctAnswers.every(value => selectedValues.includes(value));

    if (isCorrect) {
        showPopupImage(correctImage);
        correctSound.play();
        incrementEXP(loggedInUser);
        correctAnswerSelected = true;
        document.getElementById('next').disabled = false;
    } else {
        showPopupImage(incorrectImage);
        incorrectSound.play();
        decrementEXP(loggedInUser);
        correctAnswerSelected = false;
        document.getElementById('next').disabled = true;
    }
}


let selectedLeft = null;
let connections = [];
let correctAnswerSelected = false;

// Initialize the dot connection setup
function setupDotConnection() {
    connections = [];  // Reset connections array
    const leftItems = document.querySelectorAll('.left-column .dot-item');
    const rightItems = document.querySelectorAll('.right-column .dot-item');
    let selectedLeft = null;

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
                const leftContent = leftItems[selectedLeft].textContent.trim();
                const rightContent = rightItems[rightIndex].textContent.trim();

                connections.push({
                    left: leftContent,
                    right: rightContent
                });

                drawConnection(leftItems[selectedLeft], item, '#007bff');
                selectedLeft = null;
                clearSelections(leftItems);
            }
        });
    });
}

// Clear selections
function clearSelections(items) {
    items.forEach(item => item.classList.remove('selected'));
}

// Draw a line between two items
function drawConnection(leftItem, rightItem, color) {
    const svg = document.querySelector('.connection-lines');
    const leftRect = leftItem.getBoundingClientRect();
    const rightRect = rightItem.getBoundingClientRect();

    // Calculate the start and end points of the line
    const startX = leftRect.right + window.scrollX;
    const startY = leftRect.top + (leftRect.height / 2) + window.scrollY;
    const endX = rightRect.left + window.scrollX;
    const endY = rightRect.top + (rightRect.height / 2) + window.scrollY;

    // Adjust start and end points to account for potential differences
    const adjustedStartX = startX + (leftRect.width / 2);
    const adjustedEndX = endX - (rightRect.width / 2);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", adjustedStartX);
    line.setAttribute("y1", startY);
    line.setAttribute("x2", adjustedEndX);
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
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (correctAnswerSelected) {
        console.log("This question has already been solved.");
        return; // Prevents further interaction if the question is already solved
    }

    if (selectedIndex === correctIndex) {
        choices[selectedIndex].style.backgroundColor = '#67d0ba';
        correctSound.play();
        showPopupImage(correctImage);
        correctAnswerSelected = true;
        document.getElementById('next').disabled = false;

        // Disable all choices after correct answer
        choices.forEach(choice => {
            choice.style.pointerEvents = 'none';
        });

        incrementEXP(loggedInUser); // Increment EXP only if logged in
    } else {
        choices[selectedIndex].style.backgroundColor = '#ea5d64';
        showPopupImage(incorrectImage);
        incorrectSound.play();
        decrementEXP(loggedInUser);
        correctAnswerSelected = false;
    }
}


// Function to increment EXP for a logged-in user
function incrementEXP(loggedInUser) {
    if (loggedInUser) {
        let exp = parseInt(localStorage.getItem(`userExp_${loggedInUser}`)) || 0;
        exp += 1;
        localStorage.setItem(`userExp_${loggedInUser}`, exp);
        
        displayEXP(exp, 100, true); // Pass 'true' for correct answer
    } else {
        console.log("User not logged in, XP not saved.");
    }
}

function decrementEXP(loggedInUser) {
    if (loggedInUser) {
        let exp = parseInt(localStorage.getItem(`userExp_${loggedInUser}`)) || 0;
        exp -= 1;
        localStorage.setItem(`userExp_${loggedInUser}`, exp);
        
        displayEXP(exp, 100, false); // Pass 'false' for incorrect answer
    } else {
        console.log("User not logged in, XP not saved.");
    }
}


function displayEXP(exp, maxExp, isCorrect) {
    const expDisplayElement = document.getElementById('expDisplay');
    const expTextElement = expDisplayElement.querySelector('.xp-text');
    const expBarFillElement = expDisplayElement.querySelector('.xp-bar-fill');

    if (expDisplayElement && expTextElement && expBarFillElement) {
        expTextElement.textContent = `EXP: ${exp}`;
        const fillPercentage = (exp / maxExp) * 100;
        expBarFillElement.style.width = `${fillPercentage}%`;

        // Set the color based on whether the answer was correct or not
        if (isCorrect) {
            expTextElement.style.color = 'green';
        } else {
            expTextElement.style.color = 'red';
        }

        // Animate the scale and opacity
        expDisplayElement.style.transform = 'translateY(-50%) scale(1.2)';
        expDisplayElement.style.opacity = '1';
        setTimeout(() => {
            expDisplayElement.style.transform = 'translateY(-50%) scale(1)';
            expDisplayElement.style.opacity = '0.9';

            // Reset color back to white after 1 second
            setTimeout(() => {
                expTextElement.style.color = 'white';
            }, 1000);
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    let exp;

    if (loggedInUser) {
        exp = parseInt(localStorage.getItem(`userExp_${loggedInUser}`)) || 0;
    } else {
        exp = parseInt(localStorage.getItem('guestExp')) || 0;
    }

    displayEXP(exp); // Display the EXP on page load
});

// document.getElementById('resetButton').addEventListener('click', resetConnections);
// document.getElementById('verifyButton').addEventListener('click', verifyConnections);

// Initialize the game
setupDotConnection();


function updateNavigation() {
    document.getElementById('back').disabled = currentIndex === 0;
    if (lessons[currentIndex].type === 'question' || lessons[currentIndex].type === 'arrange' ||lessons[currentIndex].type === 'checkbox') {
        document.getElementById('next').disabled = !correctAnswerSelected;
    } else if (lessons[currentIndex].type === 'connect-the-dots') {
        // Ensure 'next' is disabled initially or based on connection verification
        document.getElementById('next').disabled = !correctAnswerSelected;
    } else {
        document.getElementById('next').disabled = false;
    }
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
    popSound.play();
    navigateSlides(1);
});

document.getElementById('back').addEventListener('click', () => {
    pop2Sound.play();
    navigateSlides(-1);
});

loadContent();

const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        // Adding dragging class to item after a delay
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    // Removing dragging class from item on dragend event
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    // Getting all items except currently dragging and making array of them
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // Finding the sibling after which the dragging item should be placed
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    // Inserting the dragging item before the found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  }
  
  var bubblyButtons = document.getElementsByClassName("next");
  console.log(bubblyButtons)
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }


// Function to load the user's level from local storage
function getUserLevel() {
    let level = localStorage.getItem('userLevel');
    if (level === null) {
        level = 1; // Default level is 1
        localStorage.setItem('userLevel', level);
    }
    return parseInt(level);
}

// Function to increment the user's level
function incrementLevel() {
    let currentLevel = getUserLevel();
    currentLevel += 1; // Increment the level by 1
    localStorage.setItem('userLevel', currentLevel); // Save new level to localStorage
    updateLevelDisplay(currentLevel); // Update the display on the page
}

// Function to update the level on the user interface
function updateLevelDisplay(level) {
    const levelElement = document.getElementById('levelDisplay');
    if (levelElement) {
        levelElement.textContent = `Level: ${level}`;
    }
}

// Event listener for the button click
document.getElementById('incrementLevelBtn').addEventListener('click', () => {
    incrementLevel(); // Increment and save the new level when the button is clicked
    console.log("incremented")
});

// On page load, show the current level
document.addEventListener('DOMContentLoaded', () => {
    updateLevelDisplay(getUserLevel());
    console.log("updated")
});


sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());

