window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    console.log('Logged in user:', loggedInUser);

    if (!loggedInUser) {
        document.getElementById('loginOverlay').style.display = 'flex';
    } else {
        document.getElementById('loginOverlay').style.display = 'none';
    }
};
