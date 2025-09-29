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
        description: 'Diane Schrader is a financial engineer and a thought-leader in climate finance. As the co-founder of thirdACT PBC, she develops institutional portfolios of assets backed by real estate to enable the transition of every American home to all-electric, clean energy.',
        fullDescription: 'Diane Schrader is a financial engineer and a thought-leader in climate finance. As the co-founder of thirdACT PBC, she develops institutional portfolios of assets backed by real estate to enable the transition of every American home to all-electric, clean energy. Her superpower is the Climate Salon, a global convening of the world\'s largest asset owners to accelerate investment in climate via the private markets. To amplify women in the world of finance, Diane launched the San Francisco chapter of 100 Women in Finance and quickly grew the chapter to be the third largest globally. She then served on its global board of directors for two terms, and now sits on the 100 Women in Fintech committee. Diane studied figurative painting at San Jose State University, where she taught herself to code. She went on to build a career as a global technology evangelist for 3D animation in the entertainment industry. Her work has taken her to over 50 countries, with longer stints in London, Paris, Tokyo, and Montreal. She speaks regularly at industry conferences and has guest lectured at numerous universities around the world.',
        linkedin: 'https://www.linkedin.com/in/diane-schrader/'
    },
    sara: {
        name: 'Sara Neff',
        description: 'Sara Neff is the Director of TheNewConcrete.fund. She is a recognized leader in sustainable real estate and institutional climate finance, with deep expertise in driving decarbonization strategies across complex organizations. She advises climate-focused initiatives, contributes to industry boards, and is actively involved in advancing innovative solutions that accelerate the transition to a low-carbon economy.',
        linkedin: 'https://www.linkedin.com/in/sara-neff-4490b214/'
    }
};

function openModal(person) {
    const data = teamData[person];
    if (data) {
        modalTitle.textContent = data.name;
        
        // Create description with read more functionality
        const shortDesc = data.description;
        const fullDesc = data.fullDescription || data.description;
        
        if (fullDesc && fullDesc !== shortDesc) {
            modalDescription.innerHTML = `
                <span class="short-description">${shortDesc}</span>
                <span class="full-description" style="display: none;">${fullDesc}</span>
                <button class="read-more-btn" onclick="toggleDescription(event)">Read More</button>
            `;
        } else {
            modalDescription.textContent = data.description;
        }
        
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

// Toggle description function
function toggleDescription(event) {
    event.preventDefault();
    const button = event.target;
    const shortDesc = button.parentElement.querySelector('.short-description');
    const fullDesc = button.parentElement.querySelector('.full-description');
    
    if (fullDesc.style.display === 'none') {
        shortDesc.style.display = 'none';
        fullDesc.style.display = 'inline';
        button.textContent = 'Read Less';
    } else {
        shortDesc.style.display = 'inline';
        fullDesc.style.display = 'none';
        button.textContent = 'Read More';
    }
}

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

// Scroll animations
function handleScrollAnimations() {
    const teamMembers = document.querySelectorAll('.team-member');
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    teamMembers.forEach((member, index) => {
        const elementTop = member.offsetTop;
        const elementHeight = member.offsetHeight;
        const elementBottom = elementTop + elementHeight;

        // Trigger animation when element is 20% visible from bottom of viewport
        if (scrollTop + windowHeight > elementTop + (elementHeight * 0.2)) {
            // Add a slight delay for each member for staggered effect
            setTimeout(() => {
                member.classList.add('fade-in');
            }, index * 200);
        }
    });
}

// Initialize scroll animations on page load
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
});

// Handle scroll animations on scroll
window.addEventListener('scroll', handleScrollAnimations);

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