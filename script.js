function togglePassword() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}
// JavaScript Code


const loginButton = document.querySelector('.outer-button');
loginButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email && password) {
        console.log('Login Successful');
        alert('Login Successful!')
    } else {
        alert('Please enter both email and password');
    }
});

// Forget Password link click event
const forgotPasswordLink = document.querySelector('.help-links a[href="#"]:nth-of-type(1)');
forgotPasswordLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    alert('Redirecting to Forget Password Page...');

    window.location.href = '/forgot-password'; // Example redirect
});


const contactUsLink = document.querySelector('.help-links a[href="#"]:nth-of-type(2)');
contactUsLink.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Redirecting to Contact Us Page...');
    // Add your redirect logic here
    window.location.href = '/contact-us'; 
});
