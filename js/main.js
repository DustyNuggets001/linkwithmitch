// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = navMenu.classList.toggle('active');

      // Update aria-expanded attribute
      this.setAttribute('aria-expanded', isExpanded);

      // Animate hamburger icon
      this.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside
  if (mobileMenuToggle && navMenu) {
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = mobileMenuToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
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

// NMLS Speed Bump Disclaimer
function showNMLSDisclaimer() {
  if (confirm('You are leaving linkwithmitch.com and will be redirected to an external website. Presidential Bank Mortgage is not responsible for the content, privacy policies, or security of external sites.\n\nClick OK to continue to the NMLS Consumer Access website.')) {
    window.open('https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/421593', '_blank', 'noopener,noreferrer');
  }
  return false;
}

// External Link Speed Bump Disclaimer
function showExternalLinkDisclaimer(url) {
  if (confirm('You are leaving linkwithmitch.com and will be redirected to an external website. Presidential Bank Mortgage is not responsible for the content, privacy policies, or security of external sites.\n\nClick OK to continue.')) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return false;
}
