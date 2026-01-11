// Dashboard JavaScript

// Check if user is logged in
const isLoggedIn = localStorage.getItem('isLoggedIn');
if (!isLoggedIn) {
    window.location.href = 'login.html';
}

// Sidebar navigation
const sidebarItems = document.querySelectorAll('.sidebar-menu li');
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Stats cards click handling
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log('Stat card clicked:', card.querySelector('.stat-label').textContent);
    });
});

// Filter tabs
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        console.log('Tab changed:', btn.textContent);
    });
});

// Trip menu buttons
const tripMenuBtns = document.querySelectorAll('.trip-menu-btn');
tripMenuBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Trip menu clicked');
        alert('Trip menu options:\n- View Details\n- Edit Trip\n- Cancel Trip\n- Share Location');
    });
});

// FAB button
const fabBtn = document.querySelector('.fab-btn');
if (fabBtn) {
    fabBtn.addEventListener('click', () => {
        console.log('Add button clicked');
        alert('Add new trip, vehicle, or incident');
    });
}

// Notification button
const notificationBtn = document.querySelector('.notification-btn');
if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        alert('Notifications:\n1. Vehicle KDB 1233R maintenance due\n2. New incident reported');
    });
}

// User menu
const userMenu = document.querySelector('.user-menu');
if (userMenu) {
    userMenu.addEventListener('click', () => {
        const confirmLogout = confirm('Do you want to logout?');
        if (confirmLogout) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            window.location.href = 'login.html';
        }
    });
}

// Update stats with animation
function updateStatsAnimation() {
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        const finalValue = stat.textContent.replace(/,/g, '');
        if (!isNaN(finalValue)) {
            let current = 0;
            const increment = Math.ceil(finalValue / 50);
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    current = finalValue;
                    clearInterval(timer);
                }
                stat.textContent = current.toLocaleString();
            }, 20);
        }
    });
}

// Run animation on page load
setTimeout(updateStatsAnimation, 500);

console.log('Wabebe Dashboard Loaded');
