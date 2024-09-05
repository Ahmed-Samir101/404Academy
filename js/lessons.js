// vars
const correctImage = document.getElementById('correct-image');
const incorrectImage = document.getElementById('incorrect-image');
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

    console.log("User connections:", connections);
    console.log("Correct pairs:", lessons[currentIndex].correctPairs);

    if (connections.length !== lessons[currentIndex].correctPairs.length) {
        console.log("Mismatch in the number of connections.");
        isCorrect = false;
    } else {
        connections.forEach((connection, leftIndex) => {
            const correctRightIndex = lessons[currentIndex].correctPairs[leftIndex];
            const correctLeft = lessons[currentIndex].pairs[leftIndex].left.trim();
            const correctRight = lessons[currentIndex].pairs[correctRightIndex].right.trim();

            // Trim and decode the user's connection
            const connectionLeftTrimmed = connection.left.trim();
            const connectionRightTrimmed = connection.right.trim();

            const leftDecoded = decodeHTML(correctLeft);
            const connectionLeftDecoded = decodeHTML(connectionLeftTrimmed);

            // Check if the user's connection matches the correct pair
            const matchFound = leftDecoded === connectionLeftDecoded && correctRight === connectionRightTrimmed;

            console.log(`Connection ${leftIndex + 1}:`, connection, "Match found:", matchFound);
            if (!matchFound) {
                isCorrect = false;
            }
        });
    }

    if (isCorrect) {
        console.log("All connections are correct.");
        showPopupImage(correctImage);
        correctAnswerSelected = true;
        document.getElementById('next').disabled = false;
    } else {
        console.log("Some connections are incorrect.");
        showPopupImage(incorrectImage);
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
        document.getElementById('next').disabled = false;

        incrementEXP(loggedInUser); // Increment EXP
    } else {
        showPopupImage(incorrectImage);
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
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (selectedIndex === correctIndex) {
        choices[selectedIndex].style.backgroundColor = '#67d0ba';
        showPopupImage(correctImage);
        correctAnswerSelected = true;
        document.getElementById('next').disabled = false;

        incrementEXP(loggedInUser); // Increment EXP
    } else {
        choices[selectedIndex].style.backgroundColor = '#ea5d64';
        showPopupImage(incorrectImage);
        correctAnswerSelected = false;
    }
}

// Function to increment EXP for a logged-in user
function incrementEXP(loggedInUser) {
    let exp;
    if (loggedInUser) {
        // For logged-in users
        exp = parseInt(localStorage.getItem(`userExp_${loggedInUser}`)) || 0;
        exp += 1;
        localStorage.setItem(`userExp_${loggedInUser}`, exp);
    } else {
        // For non-logged-in users
        exp = parseInt(localStorage.getItem('guestExp')) || 0;
        exp += 1;
        localStorage.setItem('guestExp', exp);
    }

    displayEXP(exp); // Update the display with the new EXP
}

function displayEXP(exp) {
    const expDisplayElement = document.getElementById('expDisplay');
    if (expDisplayElement) {
        expDisplayElement.textContent = `EXP: ${exp}`;
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
    if (lessons[currentIndex].type === 'question' || lessons[currentIndex].type === 'arrange') {
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
    navigateSlides(1);
});

document.getElementById('back').addEventListener('click', () => {
    navigateSlides(-1);
});

loadContent();

const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");

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

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());