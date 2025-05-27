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

    // نمایش پیام موفقیت پس از ارسال فرم از طریق formsubmit.io
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
        const msg = document.createElement('div');
        msg.textContent = 'پیام شما با موفقیت ارسال شد!';
        msg.style.cssText = 'background-color:#00c7c7;color:#111;padding:15px;border-radius:5px;margin-bottom:25px;text-align:center;font-weight:bold;';
        const form = document.getElementById('contact-form');
        if (form) {
            form.parentNode.insertBefore(msg, form);
        }
        // حذف ?success=true از URL پس از چند ثانیه
        setTimeout(() => {
            const url = new URL(window.location);
            url.search = '';
            window.history.replaceState({}, document.title, url);
        }, 5000);
    }

});