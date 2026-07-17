window.ANIMATIONS = {
    init() {
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (this.prefersReducedMotion) {
            document.querySelectorAll('.animate-on-scroll, .stagger-children > *').forEach(el => {
                el.classList.add('animated');
            });
            return;
        }

        this.initScrollObserver();
        this.initStaggeredReveals();
        this.initCounters();
        this.initParallax();
        this.initNavScroll();
    },

    initScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    },

    initStaggeredReveals() {
        document.querySelectorAll('.stagger-children').forEach(parent => {
            const children = Array.from(parent.children);
            children.forEach((child, index) => {
                child.style.transitionDelay = `${index * 100}ms`;
                if (!child.classList.contains('animate-on-scroll')) {
                    child.classList.add('animate-on-scroll', 'fade-in');
                }
            });
        });
    },

    initCounters() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.counter').forEach(el => {
            observer.observe(el);
        });
    },

    animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;

        const duration = 2000;
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutQuad
            const easeProgress = progress * (2 - progress);
            
            el.textContent = Math.floor(easeProgress * target);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        };
        
        window.requestAnimationFrame(step);
    },

    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            document.querySelectorAll('.parallax-bg').forEach(el => {
                const speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 0.3;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }, { passive: true });
    },

    initNavScroll() {
        const header = document.getElementById('main-header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.ANIMATIONS.init();
});
