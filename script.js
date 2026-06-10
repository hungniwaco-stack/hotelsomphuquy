// Dark Mode Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or OS preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark-mode');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelectorAll('.bar');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        bars.forEach(bar => bar.classList.toggle('animate'));
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        bars.forEach(bar => bar.classList.remove('animate'));
    });
});

// Scroll Reveal Animation logic
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < triggerBottom) {
            el.classList.add('active');
        } else {
            // Optional: remove class to animate again when scrolling up
            // el.classList.remove('active');
        }
    });
};

// Listen for scroll
window.addEventListener('scroll', scrollReveal);

// Contact Form Submission (Mockup)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Đang gửi...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            contactForm.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });
}



// Initial check on load
window.addEventListener('load', () => {
    scrollReveal();
    
    // Set default dates for booking bar
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');
    
    if (checkin && checkout) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        checkin.valueAsDate = today;
        checkout.valueAsDate = tomorrow;
    }
});

// Check availability button logic
const checkAvailabilityBtn = document.getElementById('check-availability');
if (checkAvailabilityBtn) {
    checkAvailabilityBtn.addEventListener('click', () => {
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const guests = document.getElementById('guests').value;
        
        checkAvailabilityBtn.innerText = 'Đang kiểm tra...';
        checkAvailabilityBtn.style.opacity = '0.7';
        
        setTimeout(() => {
            alert(`Cảm ơn bạn! Hệ thống đang tìm phòng trống từ ${checkin} đến ${checkout} cho ${guests} khách. (Tính năng demo)`);
            checkAvailabilityBtn.innerText = 'Kiểm Tra Phòng';
            checkAvailabilityBtn.style.opacity = '1';
        }, 1200);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for sticky nav
                behavior: 'smooth'
            });
        }
    });
});
