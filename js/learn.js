window.onload = function() {
    try {
        const loggedInUser = localStorage.getItem('loggedInUser');
        console.log('Logged in user:', loggedInUser);

        if (!loggedInUser) {
            document.getElementById('loginOverlay').style.display = 'flex';
        } else {
            document.getElementById('loginOverlay').style.display = 'none';
        }
    } catch (e) {
        console.error("Error accessing localStorage:", e);
    }
};
