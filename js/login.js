window.onload = () => {

    console.clear();

    const loginBtn = document.getElementById('login');
    const signupBtn = document.getElementById('signup');

    loginBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if (element !== "slide-up") {
                parent.classList.add('slide-up');
            } else {
                signupBtn.parentNode.classList.add('slide-up');
                parent.classList.remove('slide-up');
            }
        });
    });

    signupBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode;
        Array.from(e.target.parentNode.classList).find((element) => {
            if (element !== "slide-up") {
                parent.classList.add('slide-up');
            } else {
                loginBtn.parentNode.parentNode.classList.add('slide-up');
                parent.classList.remove('slide-up');
            }
        });
    });

    // Function to register a new user
    function register(name, password) {
        if (!name || !password) {
            alert('Please fill in all fields.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Check if the name is already registered
        if (users.some(user => user.name === name)) {
            alert('Name is already registered. Please log in.');
            loginBtn.click();
            return;
        }

        // Add user with default EXP and level
        users.push({ name, password, exp: 0, level: 1 });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');

        // Automatically show the login page
        loginBtn.click();
    }

    // Function to log in a user
    function login(name, password) {
        if (!name || !password) {
            alert('Please fill in all fields.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.name === name && user.password === password);
        
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            setTimeout(() => {
                window.location.href = 'learn.html';
            }, 100);
        } else {
            alert('Invalid name or password.');
        }
    }

    // Function to get the logged-in user
    function getLoggedInUser() {
        return JSON.parse(localStorage.getItem('loggedInUser'));
    }

    // Function to increment the user's level
    function incrementLevel() {
        const user = getLoggedInUser();
        if (user) {
            user.level += 1; // Increment the user's level
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            updateUsersList(user);
            alert(`Level up! You are now level ${user.level}.`);
        }
    }

    // Function to update the user's level in the main user list
    function updateUsersList(updatedUser) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.map(user => user.name === updatedUser.name ? updatedUser : user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Event listener for the sign-up button
    document.querySelector('.signup .submit-btn').addEventListener('click', function() {
        const name = document.querySelector('.signup .input[type="text"]').value;
        const password = document.querySelector('.signup .input[type="password"]').value;
        register(name, password);
    });

    
    document.querySelector('.login .submit-btn').addEventListener('click', function() {
        const name = document.querySelector('.login .input[type="text"]').value;
        const password = document.querySelector('.login .input[type="password"]').value;
        login(name, password);
    });
}
