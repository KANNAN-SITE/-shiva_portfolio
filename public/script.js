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

// Contact form handling

document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // 🚀 VERY IMPORTANT

    const name = document.querySelector("input[placeholder='Your Name']").value;
    const email = document.querySelector("input[placeholder='Your Email']").value;
    const message = document.querySelector("textarea").value;

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();
        if (data.success) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            // clear form
            document.getElementById('contactForm').reset();
        } else {
            document.getElementById('errorMessage').textContent = data.message || 'Something went wrong';
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }
    } catch (err) {
        console.error('Fetch error:', err);
        document.getElementById('errorMessage').textContent = 'Network error';
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    }
});


// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  console.log('Portfolio loaded successfully!');
});
