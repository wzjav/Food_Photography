// // Smooth navbar background transition on scroll
// window.addEventListener('scroll', function() {
//     const nav = document.querySelector('nav');
//     if (window.scrollY > 50) {
//         nav.style.background = 'rgba(254, 252, 248, 0.98)';
//         nav.style.boxShadow = '0 2px 20px rgba(74, 55, 40, 0.1)';
//     } else {
//         nav.style.background = 'rgba(254, 252, 248, 0.95)';
//         nav.style.boxShadow = 'none';
//     }
// });

// // Portfolio item click effect
// document.querySelectorAll('.portfolio-item').forEach(item => {
//     item.addEventListener('click', function() {
//         this.style.transform = 'scale(0.95)';
//         setTimeout(() => {
//             if (this.classList.contains('animate')) {
//                 this.style.transform = 'translateY(0)';
//             }
//         }, 150);
//     });
// });


// // Enhanced scroll-triggered animations
// const observerOptions = {
//     threshold: 0.2,
//     rootMargin: '0px 0px -100px 0px'
// };

// const animateObserver = new IntersectionObserver(function(entries) {
//     entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//             // Add staggered delay for multiple items
//             if (entry.target.classList.contains('portfolio-item')) {
//                 setTimeout(() => {
//                     entry.target.classList.add('animate');
//                 }, index * 100);
//             } else if (entry.target.classList.contains('service-card')) {
//                 setTimeout(() => {
//                     entry.target.classList.add('animate');
//                 }, index * 150);
//             } else {
//                 entry.target.classList.add('animate');
//             }
//         } else {
//             // Remove animation class when element goes out of view
//             entry.target.classList.remove('animate');
//         }
//     });
// }, observerOptions);

// // Observe all animatable elements
// document.querySelectorAll('.portfolio-item, .service-card, .about-content > *').forEach(element => {
//     animateObserver.observe(element);
// });

// // Section titles animation
// const titleObserver = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateX(0)';
//         } else {
//             entry.target.style.opacity = '0';
//             entry.target.style.transform = 'translateX(-30px)';
//         }
//     });
// }, {
//     threshold: 0.5,
//     rootMargin: '0px 0px -50px 0px'
// });

// // Make section titles animatable
// document.querySelectorAll('.section h2').forEach(title => {
//     title.style.opacity = '0';
//     title.style.transform = 'translateX(-30px)';
//     title.style.transition = 'all 0.8s ease';
//     titleObserver.observe(title);
// });

// // Contact section animation
// const contactObserver = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         const elements = entry.target.querySelectorAll('h2, p, .contact-button');
//         if (entry.isIntersecting) {
//             elements.forEach((el, index) => {
//                 setTimeout(() => {
//                     el.style.opacity = '1';
//                     el.style.transform = 'translateY(0)';
//                 }, index * 200);
//             });
//         } else {
//             elements.forEach(el => {
//                 el.style.opacity = '0';
//                 el.style.transform = 'translateY(30px)';
//             });
//         }
//     });
// }, {
//     threshold: 0.3,
//     rootMargin: '0px 0px -100px 0px'
// });

// // Make contact elements animatable
// const contactSection = document.querySelector('.contact .section');
// const contactElements = contactSection.querySelectorAll('h2, p, .contact-button');
// contactElements.forEach(el => {
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(30px)';
//     el.style.transition = 'all 0.6s ease';
// });
// contactObserver.observe(contactSection);


// Smooth navbar background transition on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.borderBottom = '1px solid rgba(74, 55, 40, 0.1)';
        nav.style.boxShadow = '0 2px 20px rgba(74, 55, 40, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        nav.style.boxShadow = 'none';
    }
});

// Portfolio item click effect
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            if (this.classList.contains('animate')) {
                this.style.transform = 'translateY(0)';
            }
        }, 150);
    });
});

// Enhanced scroll-triggered animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const animateObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for multiple items
            if (entry.target.classList.contains('portfolio-item')) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            } else if (entry.target.classList.contains('service-card')) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 150);
            } else {
                entry.target.classList.add('animate');
            }
        } else {
            // Remove animation class when element goes out of view
            entry.target.classList.remove('animate');
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.portfolio-item, .service-card, .about-content > *').forEach(element => {
    animateObserver.observe(element);
});

// Section titles animation
const titleObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateX(-30px)';
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
});

// Make section titles animatable
document.querySelectorAll('.section h2').forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateX(-30px)';
    title.style.transition = 'all 0.8s ease';
    titleObserver.observe(title);
});

// Contact section animation
const contactObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        const elements = entry.target.querySelectorAll('h2, p, .contact-button');
        if (entry.isIntersecting) {
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });
        } else {
            elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
            });
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
});

// Make contact elements animatable
const contactSection = document.querySelector('.contact .section');
const contactElements = contactSection.querySelectorAll('h2, p, .contact-button');
contactElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
});
contactObserver.observe(contactSection);