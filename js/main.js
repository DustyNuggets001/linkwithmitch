// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');

      // Animate hamburger icon
      this.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    }
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
  });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
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

// Add active class to current page nav link
const currentLocation = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  if (linkPath === currentLocation || (currentLocation === '' && linkPath === 'index.html')) {
    link.classList.add('active');
  }
});
