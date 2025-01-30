document.addEventListener('DOMContentLoaded', () => {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const postCards = document.querySelectorAll('.post-card');
    const featuredCard = document.querySelector('.featured-card');

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            
            // Filter posts
            postCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    // Show card with animation
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    // Hide card with animation
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Page number clicks
    const pageNumbers = document.querySelectorAll('.page-number');
    pageNumbers.forEach(number => {
        number.addEventListener('click', () => {
            pageNumbers.forEach(n => n.classList.remove('active'));
            number.classList.add('active');
            // Add your pagination logic here
        });
    });

    // Add hover effect to featured post
    if (featuredCard) {
        featuredCard.addEventListener('mousemove', (e) => {
            const rect = featuredCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            featuredCard.style.setProperty('--x', `${x}px`);
            featuredCard.style.setProperty('--y', `${y}px`);
        });
    }
});