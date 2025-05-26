// script.js

document.addEventListener('DOMContentLoaded', function() {

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            if(backToTopButton) backToTopButton.style.display = "flex"; // Use flex for centering icon
        } else {
            if(backToTopButton) backToTopButton.style.display = "none";
        }
    };

    if(backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (navToggle && mainNavUl) {
        navToggle.addEventListener('click', function() {
            mainNavUl.classList.toggle('nav-active');
            navToggle.classList.toggle('active'); // For hamburger animation
        });

        // Close mobile menu when a link is clicked (optional)
        const navLinks = mainNavUl.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNavUl.classList.contains('nav-active')) {
                    mainNavUl.classList.remove('nav-active');
                    navToggle.classList.remove('active');
                }
            });
        });
    }

    // Optional: Smooth scroll for anchor links if you add any on the same page
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     if (anchor.getAttribute('href') !== '#' && anchor.getAttribute('href') !== '#donate-link-placeholder') { // Exclude simple # and placeholder
    //         anchor.addEventListener('click', function (e) {
    //             const hrefAttribute = this.getAttribute('href');
    //             // Ensure it's a valid ID selector and the element exists
    //             if (hrefAttribute.startsWith('#') && hrefAttribute.length > 1) {
    //                 try {
    //                     const targetElement = document.querySelector(hrefAttribute);
    //                     if (targetElement) {
    //                         e.preventDefault();
    //                         targetElement.scrollIntoView({
    //                             behavior: 'smooth'
    //                         });
    //                     }
    //                 } catch (error) {
    //                     // Catch invalid selector errors, e.g., if href is like '#(some-text)'
    //                     console.warn('Invalid selector for smooth scroll:', hrefAttribute, error);
    //                 }
    //             }
    //         });
    //     }
    // });

});