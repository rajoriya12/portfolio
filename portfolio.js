document.addEventListener("DOMContentLoaded", function() {
    
    // --- Scroll Animation ---
    const sections = document.querySelectorAll("main > section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 }); // Trigger a bit earlier

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
    });

    // --- Smooth Scrolling for Nav Links ---
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu on link click
            if (navLinks.classList.contains('nav-open')) {
                navLinks.classList.remove('nav-open');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});