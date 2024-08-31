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
    console.log('Verify button clicked'); // Debug log
    const leftItems = document.querySelectorAll('.left-column .dot-item');
    const rightItems = document.querySelectorAll('.right-column .dot-item');
    
    connections.forEach(connection => {
        const isCorrect = connection.leftIndex === connection.rightIndex;
        const leftItem = leftItems[connection.leftIndex];
        const rightItem = rightItems[connection.rightIndex];

        if (isCorrect) {
            leftItem.classList.add('correct');
            rightItem.classList.add('correct');
        } else {
            leftItem.classList.add('incorrect');
            rightItem.classList.add('incorrect');
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

