// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    
    // Show first testimonial by default
    testimonials[0].classList.add('active');
    dots[0].classList.add('active');
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        changeTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 5000);
    
    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeTestimonial(index);
        });
    });
    
    function changeTestimonial(index) {
        // Hide current testimonial
        testimonials[currentTestimonial].classList.remove('active');
        dots[currentTestimonial].classList.remove('active');
        
        // Show new testimonial
        currentTestimonial = index;
        testimonials[currentTestimonial].classList.add('active');
        dots[currentTestimonial].classList.add('active');
    }
    
    // Animation for mission stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const missionSection = document.querySelector('.mission-section');
    
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const suffix = stat.textContent.replace(/^[0-9]+/g, '');
            let current = 0;
            const increment = target / 30;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                stat.textContent = Math.floor(current) + suffix;
            }, 20);
        });
    };
    
    // Only animate when section is in view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
            observer.unobserve(missionSection);
        }
    }, { threshold: 0.5 });
    
    observer.observe(missionSection);
});