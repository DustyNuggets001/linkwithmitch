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

// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
  // Create back to top button
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gold, #FFB600);
    color: var(--navy, #002B5E);
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  `;
  document.body.appendChild(backToTop);

  // Show/hide button on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });

  // Scroll to top on click
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Hover effect
  backToTop.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
    this.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
  });

  backToTop.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
  });
});
