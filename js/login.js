window.onload = () => {

    console.clear();

    const loginBtn = document.getElementById('login');
    const signupBtn = document.getElementById('signup');

    loginBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if(element !== "slide-up") {
                parent.classList.add('slide-up')
            }else{
                signupBtn.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    });

    signupBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode;
        Array.from(e.target.parentNode.classList).find((element) => {
            if(element !== "slide-up") {
                parent.classList.add('slide-up')
            }else{
                loginBtn.parentNode.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    });

    // Function to register a new user
    function register(name, email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Check if the email is already registered
        if (users.some(user => user.email === email)) {
            alert('Email is already registered. Please log in.');
            return;
        }
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');
    }

    // Function to log in a user
    function login(email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful!');
        } else {
            alert('Invalid email or password.');
        }
    }

    // Event listener for the sign-up button
    document.querySelector('.signup .submit-btn').addEventListener('click', function() {
        const name = document.querySelector('.signup .input[type="text"]').value;
        const email = document.querySelector('.signup .input[type="email"]').value;
        const password = document.querySelector('.signup .input[type="password"]').value;

        register(name, email, password);
    });

    // Event listener for the login button
    document.querySelector('.login .submit-btn').addEventListener('click', function() {
        const email = document.querySelector('.login .input[type="email"]').value;
        const password = document.querySelector('.login .input[type="password"]').value;

        login(email, password);
    });

}