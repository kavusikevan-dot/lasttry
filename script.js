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
        description: 'This is Diane Schrader\'s description',
        linkedin: 'https://linkedin.com/in/dianeschrader'
    },
    sara: {
        name: 'Sara Neff',
        description: 'This is Sara Neff\'s description',
        linkedin: 'https://linkedin.com/in/saraneff'
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
    const email = document.querySelector('.newsletter-input').value;
    if (email) {
        alert('Thank you for subscribing! We\'ll be in touch soon.');
        document.querySelector('.newsletter-input').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Smooth scrolling for internal links
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