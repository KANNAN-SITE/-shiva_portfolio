// ==================== Dark/Light Mode Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Initialize theme from localStorage
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
    themeToggle.textContent = '🌙';
  } else {
    body.classList.remove('light');
    themeToggle.textContent = '☀️';
  }
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  const isLightMode = body.classList.contains('light');
  localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  themeToggle.textContent = isLightMode ? '🌙' : '☀️';
});

// ==================== Smooth Scrolling Navigation ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form removed per user request
// No related JavaScript required anymore


// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  console.log('Portfolio loaded successfully!');
});
