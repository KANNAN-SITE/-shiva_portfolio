# 🎨 Shiva Nayan S - Personal Portfolio

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-v24+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Live-black?style=for-the-badge&logo=vercel)](https://portfolio-khaki-zeta-45.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Code-181717?style=for-the-badge&logo=github)](https://github.com/KANNAN-SITE/-shiva_portfolio)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**[🌐 Live Portfolio](https://portfolio-khaki-zeta-45.vercel.app)** • **[📝 Features](#-features)** • **[🚀 Quick Start](#-quick-start)** • **[💻 Tech Stack](#-tech-stack)**

---

A modern, sophisticated personal portfolio website built with **Node.js & Express**, featuring a **glassmorphic UI**, responsive design, and smooth animations. Deployed and live on **Vercel**.

</div>

---

## ✨ Features

- 🎨 **Modern Glassmorphism Design** - Elegant blur effects and layered glass panels
- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching with persistent user preferences
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚫⚪ **Professional Monochrome Theme** - Clean black & white minimalist aesthetic
- ⚡ **Fast & Lightweight** - Optimized performance with smooth animations
- 🎯 **Smooth Navigation** - Scroll-to-section functionality with active link highlighting
- 🔒 **CORS Enabled** - Secure cross-origin resource sharing
- 📺 **Professional Portfolio Sections** - About, Projects, Skills, and more

---

## 💻 Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, Animations
- **JavaScript (Vanilla)** - DOM manipulation, theme toggle, smooth scrolling
- **Google Fonts** - Poppins typography

### Backend
- **Node.js v24** - JavaScript runtime
- **Express.js 4.18** - Web application framework
- **CORS** - Cross-Origin Resource Sharing middleware

### Deployment
- **Vercel** - Serverless hosting (live: https://portfolio-khaki-zeta-45.vercel.app)
- **GitHub** - Version control

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html              # Main HTML - Portfolio sections & structure
│   ├── style.css               # CSS - Glassmorphic design & responsive layout
│   ├── script.js               # JavaScript - Interactivity & theme toggle
│   └── pro.jpeg                # Profile image
├── server.js                   # Express server - Routes & middleware
├── package.json                # Dependencies & NPM scripts
├── vercel.json                 # Vercel deployment configuration
├── .env                        # Environment variables (git-ignored)
├── .gitignore                  # Git ignore rules
└── README.md                   # Documentation
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KANNAN-SITE/-shiva_portfolio.git
   cd -shiva_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment (for contact API):**
   ```bash
   echo MONGO_URL=mongodb://localhost:27017/portfolio > .env
   # or put your Atlas connection string
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm start` - Start server with auto-reload (requires nodemon)
- `npm run dev` - Development mode with file watching
- `node server.js` - Direct server startup

---

## 🎨 Design Features

### Color Scheme (Monochrome)
- **Background Dark**: `#000000` (Pure black)
- **Background Light**: `#ffffff` (Pure white)
- **Text Contrast**: High contrast for accessibility
- **Glassmorphism**: `backdrop-filter: blur(15px)`

### Responsive Breakpoints
| Device | Width | Optimization |
|--------|-------|--------------|
| Mobile | 480px | Touch-friendly, single column |
| Tablet | 768px | Two-column layout |
| Desktop | 1024px+ | Full multi-column layout |

### Animations
- Fade-in on scroll
- Smooth color transitions
- Floating profile image
- Gradient hover effects

---

## 🔧 How to Use

### Navigation
1. Click navigation links to smoothly scroll to sections
2. Toggle dark/light mode with the theme button (🌙/☀️)
3. Theme preference is automatically saved in browser

### Customization

**Add Your Information:**
1. Edit `public/index.html` - Update sections with your content
2. Edit `public/script.js` - Modify smooth scroll or theme logic
3. Edit `public/style.css` - Customize colors and fonts
4. Replace `public/pro.jpeg` with your profile photo

**Change Theme Colors:**
Edit `:root` CSS variables in `public/style.css`:
```css
:root {
  --primary-color: #000000;  /* Dark mode background */
  --text-color: #ffffff;      /* Text color */
  /* ... more variables */
}
```

---

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1"
}
```

**Dev Dependencies:**
- `nodemon` - Auto-reload on file changes

---

## 🌐 Deployment

### Live on Vercel
**URL:** https://portfolio-khaki-zeta-45.vercel.app

### One-Click Deploy
1. Push to GitHub
2. Vercel auto-deploys on `main` branch push
3. Check deployment status in [Vercel Dashboard](https://vercel.com/dashboard)

### Deploy Manually
```bash
npm install -g vercel
vercel --prod
```

---

## 🔍 Performance

| Metric | Target | Current |
|--------|--------|---------|
| Page Load | <2s | ✅ Optimized |
| Lighthouse | 90+ | ✅ High score |
| Mobile Friendly | Yes | ✅ Fully responsive |
| Accessibility | WCAG 2.1 | ✅ Compliant |

---

## 🛠 Troubleshooting

| Issue | Solution |
|-------|----------|
| **Port 3000 in use** | `netstat -ano \| findstr :3000` then `taskkill /PID [PID] /F` |
| **Dependencies missing** | Run `npm install` |
| **Styling not applied** | Clear browser cache (Ctrl+Shift+Delete) |
| **Dark mode not working** | Check JavaScript console for errors |

---

## 📋 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Edge | ✅ Full support |
| IE 11 | ❌ Not supported |

---

## 🔐 Security & Best Practices

✅ **Implemented:**
- CORS protection
- HTTP headers security
- Input validation
- Environment variable management

❌ **Never:**
- Commit `.env` file to GitHub
- Share sensitive credentials
- Store passwords in code

---

## 📈 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Project filtering by category
- [ ] Search functionality
- [ ] CMS integration
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Email contact form integration
- [ ] Analytics tracking

---

## 📞 Support & Contact

- **Email:** kannan2007priyashiju@gmail.com
- **GitHub:** [KANNAN-SITE](https://github.com/KANNAN-SITE)
- **Issues:** [GitHub Issues](https://github.com/KANNAN-SITE/-shiva_portfolio/issues)

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🎯 Credits

Built with ❤️ by **Shiva Nayan S**

**Special Thanks:**
- [Vercel](https://vercel.com) - Hosting & Deployment
- [GitHub](https://github.com) - Version Control
- [Google Fonts](https://fonts.google.com) - Typography

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

[⬆ Back to top](#-shiva-nayan-s---personal-portfolio)

**Made with 💚 by Shiva Nayan S | 2026**

</div>
