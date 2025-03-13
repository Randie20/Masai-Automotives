document.addEventListener('DOMContentLoaded', () => {
    // Highlight current page in navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      }
    });

    // Hero section animation
    const heroText = document.querySelector('.hero h1');
    heroText.style.opacity = 0;
    setTimeout(() => {
      heroText.style.transition = 'opacity 1s';
      heroText.style.opacity = 1;
    }, 500);

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
      });
      button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
      });
    });

    // Dynamic year in footer
    const footerYear = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Masai Automotive`;
  });