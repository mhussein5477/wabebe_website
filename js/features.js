// Features Page JavaScript

// Category filtering
const categoryTabs = document.querySelectorAll('.category-tab');
const featureDetails = document.querySelectorAll('.feature-detail');

categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.dataset.category;
        
        // Update active tab
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Filter features
        featureDetails.forEach(feature => {
            if (category === 'all') {
                feature.style.display = 'block';
            } else {
                const featureCategories = feature.dataset.category.split(' ');
                if (featureCategories.includes(category)) {
                    feature.style.display = 'block';
                } else {
                    feature.style.display = 'none';
                }
            }
        });
        
        // Re-trigger animation for visible items
        setTimeout(() => {
            observeFeatures();
        }, 100);
    });
});

// Scroll-triggered animations
function observeFeatures() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.feature-detail').forEach(feature => {
        if (feature.style.display !== 'none') {
            observer.observe(feature);
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', observeFeatures);

console.log('Features page loaded');
