document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.download-button');
    const statusElement = document.getElementById('status');

    downloadButton.addEventListener('click', () => {
        statusElement.textContent = 'Your download will start shortly...';
    });
});