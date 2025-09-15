// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Function to animate skill bars on scroll
    function animateSkillBars() {
        // Animate Design 1: Linear skill bars
        const skillProgresses = document.querySelectorAll('.skill-progress');
        skillProgresses.forEach(progress => {
            const width = progress.getAttribute('data-width');
            progress.style.width = width + '%';
        });

        // Animate Design 3: Glass skill bars
        const glassProgresses = document.querySelectorAll('.glass-skill-progress');
        glassProgresses.forEach(progress => {
            const width = progress.getAttribute('data-width');
            progress.style.width = width + '%';
        });

        // Animate Design 2: Circular progress bars
        const circularProgresses = document.querySelectorAll('.circular-progress');
        circularProgresses.forEach(progress => {
            const percentage = parseInt(progress.getAttribute('data-percentage'));
            const degrees = (percentage / 100) * 360;
            
            // Create the conic gradient animation
            let currentDegrees = 0;
            const animation = setInterval(() => {
                currentDegrees += 2;
                if (currentDegrees >= degrees) {
                    currentDegrees = degrees;
                    clearInterval(animation);
                }
                progress.style.background = `conic-gradient(#667eea ${currentDegrees}deg, #e0e0e0 ${currentDegrees}deg)`;
            }, 20);
        });
    }

    // Intersection Observer for scroll-based animations
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small delay for better visual effect
                setTimeout(() => {
                    animateSkillBars();
                }, 200);
                
                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each design section
    const designSections = document.querySelectorAll('.design-section');
    designSections.forEach(section => {
        observer.observe(section);
    });

    // Add hover effects for interactive feel
    addHoverEffects();

    // Function to add hover effects
    function addHoverEffects() {
        // Hover effect for linear skill bars
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });

        // Hover effect for circular progress bars
        const circularSkills = document.querySelectorAll('.circular-skill');
        circularSkills.forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                const progress = this.querySelector('.circular-progress');
                progress.style.transform = 'scale(1.1)';
                progress.style.transition = 'transform 0.3s ease';
            });
            
            skill.addEventListener('mouseleave', function() {
                const progress = this.querySelector('.circular-progress');
                progress.style.transform = 'scale(1)';
            });
        });

        // Hover effect for glass skill items
        const glassSkillItems = document.querySelectorAll('.glass-skill-item');
        glassSkillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(255, 255, 255, 0.15)';
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'all 0.3s ease';
                this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
    }

    // Add click functionality to reset animations
    document.addEventListener('keydown', function(e) {
        if (e.key === 'r' || e.key === 'R') {
            resetAnimations();
        }
    });

    function resetAnimations() {
        // Reset linear skill bars
        const skillProgresses = document.querySelectorAll('.skill-progress');
        skillProgresses.forEach(progress => {
            progress.style.width = '0%';
        });

        // Reset glass skill bars
        const glassProgresses = document.querySelectorAll('.glass-skill-progress');
        glassProgresses.forEach(progress => {
            progress.style.width = '0%';
        });

        // Reset circular progress bars
        const circularProgresses = document.querySelectorAll('.circular-progress');
        circularProgresses.forEach(progress => {
            progress.style.background = 'conic-gradient(#667eea 0deg, #e0e0e0 0deg)';
        });

        // Re-observe sections for re-animation
        designSections.forEach(section => {
            observer.observe(section);
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Console message for developers
    console.log('🎨 Skill Bar Demo Loaded Successfully!');
    console.log('💡 Press "R" key to reset animations');
    console.log('🖱️ Hover over elements for interactive effects');
});
