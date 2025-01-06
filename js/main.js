// Handle star rating
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.dataset.rating;
        stars.forEach(s => {
            s.classList.toggle('active', s.dataset.rating <= rating);
        });
    });
});

// Handle form submission
const form = document.querySelector('.feedback-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your feedback!');
    form.reset();
});

// Lazy load gallery images
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const beachImages = [
        'https://images.unsplash.com/photo-1520942702018-0862200e6873',
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21',
        'https://images.unsplash.com/photo-1468413253725-0d5181091126',
        'https://images.unsplash.com/photo-1471922694854-ff1b63b20054',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206',
        'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57'
    ];

    beachImages.forEach(url => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        const img = document.createElement('img');
        img.src = `${url}?w=400&h=300&fit=crop`;
        img.alt = 'Beach Gallery Image';
        item.appendChild(img);
        galleryGrid.appendChild(item);
    });
});