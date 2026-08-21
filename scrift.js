/**
 * PORTFOLIO - JavaScript (Beginner Friendly)
 * All interactive features
 */

console.log('🚀 Yasir Khan Portfolio is ready!');

// ============================================
// 1️⃣ HAMBURGER MENU (Mobile Navigation)
// ============================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});

// ============================================
// 2️⃣ SMOOTH SCROLL (For all anchor links)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// 3️⃣ NAVBAR SCROLL EFFECT
// ============================================

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 26, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// 4️⃣ CONTACT FORM (Submit handler)
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message Yasir! I will get back to you soon! 🙏');
    this.reset();
});

// ============================================
// 5️⃣ SKILLS ANIMATION (When visible)
// ============================================

const skillsSection = document.getElementById('skills');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
        }
    });
}, { threshold: 0.5 });

skillsObserver.observe(skillsSection);

console.log('✅ All features are working!');
console.log('🎉 Yasir Khan Portfolio is ready!');