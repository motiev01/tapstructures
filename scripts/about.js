document.addEventListener('DOMContentLoaded', () => {
    // Animate timeline items when they come into view
    const timelineItems = document.querySelectorAll('.timeline-item');
    const skillCategories = document.querySelectorAll('.skill-category');

    // Create intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.2 // 20% of item must be visible
    });

    // Observe timeline items
    timelineItems.forEach(item => {
        observer.observe(item);
        // Add initial state class
        item.classList.add('timeline-item-hidden');
    });

    // Observe skill categories
    skillCategories.forEach(category => {
        observer.observe(category);
        // Add initial state class
        category.classList.add('skill-category-hidden');
    });

    // Add hover effect to skill items
    const skillItems = document.querySelectorAll('.skill-category li');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Remove active class from all items
            skillItems.forEach(i => i.classList.remove('active'));
            // Add active class to hovered item
            item.classList.add('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});