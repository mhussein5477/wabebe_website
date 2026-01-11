// Auth Page JavaScript

// Toggle password visibility
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

if (togglePassword) {
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        const icon = togglePassword.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
}

// Handle login form submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // Simulate login
        console.log('Login attempt:', { email, remember });
        
        // Show loading state
        const submitBtn = loginForm.querySelector('.btn-primary');
        submitBtn.textContent = 'Signing in...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Store user session
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        }, 1500);
    });
}

// Biometric authentication
const biometricBtn = document.querySelector('.btn-biometric');
if (biometricBtn) {
    biometricBtn.addEventListener('click', () => {
        alert('Biometric authentication not available in demo mode');
    });
}
