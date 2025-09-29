// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLinkedin = document.getElementById('modal-linkedin');

const teamData = {
    diane: {
        name: 'Diane Schrader',
        description: 'Diane Schrader is deeply engaged in institutional climate finance and is embedded in the climate startup ecosystem at Stanford. She advises startups, serves on several boards, and actively contributes to advancing renewable energy solutions, including hands-on work with solar installation.',
        linkedin: 'https://www.linkedin.com/in/diane-schrader/'
    },
    sara: {
        name: 'Sara Neff',
        description: 'This is Sara Neff\'s description',
        linkedin: 'https://www.linkedin.com/in/sara-neff-4490b214/'
    }
};

function openModal(person) {
    const data = teamData[person];
    if (data) {
        modalTitle.textContent = data.name;
        modalDescription.textContent = data.description;
        modalLinkedin.href = data.linkedin;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Newsletter subscription
document.querySelector('.newsletter-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const firstName = document.querySelectorAll('.newsletter-input')[0].value;
    const lastName = document.querySelector('.newsletter-lastname').value;
    const email = document.querySelectorAll('.newsletter-input')[1].value;
    
    if (firstName && lastName && email) {
        alert('Thank you for subscribing! We\'ll be in touch soon.');
        document.querySelectorAll('.newsletter-input')[0].value = '';
        document.querySelector('.newsletter-lastname').value = '';
        document.querySelectorAll('.newsletter-input')[1].value = '';
    } else {
        alert('Please fill in all required fields.');
    }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]:not(#modal-linkedin)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});