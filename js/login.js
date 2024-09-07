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
        if (!name || !password) {  // Check for empty inputs
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
        users.push({ name, password, exp: 0 }); // Add exp with a default value of 0
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');

        // Automatically show the login page
        loginBtn.click();
    }

    // Function to log in a user
    function login(name, password) {
        if (!name || !password) {  // Check for empty inputs
            alert('Please fill in all fields.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.name === name && user.password === password);
    
        if (user) {
            alert('Login successful!');
            localStorage.setItem('loggedInUser', user.name); // Store the logged-in user's name
            window.location.href = '../index.html'; // Redirect to the home page
        } else {
            alert('Invalid name or password.');
        }
    }

    // Event listener for the sign-up button
    document.querySelector('.signup .submit-btn').addEventListener('click', function() {
        const name = document.querySelector('.signup .input[type="text"]').value;
        const password = document.querySelector('.signup .input[type="password"]').value;

        register(name, password);
    });

    // Event listener for the login button
    document.querySelector('.login .submit-btn').addEventListener('click', function() {
        const name = document.querySelector('.login .input[type="text"]').value;
        const password = document.querySelector('.login .input[type="password"]').value;

        login(name, password);
    });

    // Event listener for Enter key press on inputs
//     document.querySelectorAll('.input[type="text"], .input[type="password"]').forEach(input => {
//         input.addEventListener('keydown', (e) => {
//             if (e.key === 'Enter') {
//                 if (input.closest('.signup')) {
//                     signupBtn.click();
//                 } else if (input.closest('.login')) {
//                     loginBtn.click();
//                 }
//             }
//         });
//     });

}
