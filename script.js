
function switchLang(lang) {
  // Hide all language elements
  document.querySelectorAll('.lang').forEach(el => el.classList.remove('active'));
  
  // Show all elements for the selected language
  document.querySelectorAll(
    '#' + lang + '-header, ' +
    '#' + lang + '-hero, ' +
    '#' + lang + '-services, ' +
    '#' + lang + '-gallery, ' +
    '#' + lang + '-why, ' +
    '#' + lang + '-contact'
  ).forEach(el => el.classList.add('active'));
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

// Add scroll animation observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-card, .why-card, .gallery img').forEach(el => {
    observer.observe(el);
  });
});
