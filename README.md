# 🎨 Shiva Nayan S - Personal Portfolio Website

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18-black?style=flat-square&logo=express)](https://expressjs.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)](https://portfolio-khaki-zeta-45.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

A modern, full-stack personal portfolio website featuring a **glassmorphic UI** and **monochrome black & white theme**.

[Live Demo](https://portfolio-khaki-zeta-45.vercel.app) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Deployment](#-deployment)

</div>

---

## ✨ Features

- 🎨 **Modern Glassmorphism Design** - Beautiful blur effects and layered glass panels
- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚫⚪ **Monochrome Black & White Theme** - Professional minimalist aesthetic
- � **Fast & Lightweight** - Optimized performance with smooth animations
- ⌨️ **Smooth Navigation** - Scroll-to-section functionality
- 🎯 **Form Validation** - Client-side and server-side validation
- 🔒 **CORS Enabled** - Secure cross-origin requests

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html              # Main HTML file
│   ├── style.css               # CSS - Glassmorphic design & responsive layout
│   └── script.js               # JavaScript - Interactivity & front-end logic
├── server.js                   # Express server & routes
├── package.json                # Dependencies & scripts
├── .env                        # Environment variables (not in git)
└── README.md                   # Documentation
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (optional) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KANNAN-SITE/Shiva_portfolio.git
   cd Shiva_portfolio/portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB:**
   - Create `.env` file in the `portfolio` folder:
     ```
     MONGO_URL=mongodb://localhost:27017/portfolio
     PORT=3000
     NODE_ENV=development
     ```
   
   **If using MongoDB Atlas:**
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the server in production mode |
| `npm run dev` | Runs the server with auto-reload (requires nodemon) |

---

## 🗄️ Database Setup

### Option 1: MongoDB Atlas (Recommended - Cloud) ☁️

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `MONGO_URL` in `.env` file

**Advanced Options:**
- Network access whitelisting
- Backup automation
- Real-time monitoring

### Option 2: Local MongoDB Installation 💾

1. Download from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install with default settings
3. Start MongoDB:
   ```bash
   # Windows
   mongod
   ```

---


## 🎨 Design Details

### Theme Colors (Monochrome Black & White)
- **Background**: `linear-gradient(135deg, #000000, #1a1a1a)` 🖤
- **Accent**: Pure White `#ffffff` ⚪
- **Glassmorphism**: 15px blur backdrop filter
- **Light Mode**: White background with dark text overlay

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

### Fonts
- Primary Font: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts

---

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.5.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1"
}
```

**Dev Dependencies:**
- `nodemon`: ^3.0.1 (auto-reload during development)

---

## ✅ Form Validation

The application validates:
- ✓ All fields are required (name, email, message)
- ✓ Valid email format using regex
- ✓ Message minimum 10 characters
- ✓ Server-side validation in Express
- ✓ Mongoose schema validation

---

## 🌐 Deployment

### Deploy to Heroku

1. **Install Heroku CLI:** [Download](https://devcenter.heroku.com/articles/heroku-cli)

2. **Login to Heroku:**
   ```bash
   heroku login
   ```

3. **Create app:**
   ```bash
   heroku create your-app-name
   ```

4. **Set environment variables:**
   ```bash
   heroku config:set MONGO_URL=mongodb+srv://...
   ```

5. **Deploy:**
   ```bash
   git push heroku main
   ```

### Deploy to Other Platforms

- **Railway** - Node.js focused, easy MongoDB integration
- **Render** - Full-stack deployment with free tier
- **AWS** - Scalable cloud platform
- **Vercel** - Frontend deployment (separate from backend)

---

## 🔒 Security Considerations

- ✅ Environment variables in `.env` (not in git)
- ✅ CORS enabled for safe cross-origin requests
- ✅ Input validation on client and server
- ✅ Email format validation
- ✅ No sensitive data in repository

---

## 📚 Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup & structure |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript** | Interactive functionality & form handling |
| **Node.js** | Server runtime environment |
| **Express.js** | Web framework & routing |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB object modeling |

---

## 👨‍💻 About the Developer

**Shiva Nayan S**
- 📧 Email: [kannan2007priyashiju@gmail.com](mailto:kannan2007priyashiju@gmail.com)
- 🔗 GitHub: [@KANNAN-SITE](https://github.com/KANNAN-SITE)
- 💼 Portfolio: [Live Demo](#)

**Skills:**
- **Languages**: C++, Java, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Tools**: Git, GitHub, VS Code

---

## 📝 License

This project is open source and available under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
✗ MongoDB Connection Error: connect ECONNREFUSED
```
**Solution:**
- Ensure MongoDB is running (`mongod` in terminal)
- Or use MongoDB Atlas and update `MONGO_URL` in `.env`
- Check connection string format

### Port Already in Use
```
Error: listen EADDRINUSE :::3000
```
**Solution:**
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (Windows)
taskkill /PID <PID> /F

# Or change PORT in .env
```

### Form Not Submitting
**Check:**
- Browser console for errors (F12)
- MongoDB is connected
- All form fields are filled
- .env file has correct MONGO_URL
- Server console for error messages

---

## 📞 Support

For questions or issues:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Review [GitHub Issues](https://github.com/KANNAN-SITE/Shiva_portfolio/issues)
3. Email: kannan2007priyashiju@gmail.com

---

## 🎉 Changelog

### v1.0.0 (February 2026)
- Initial release with glassmorphic UI
- Monochrome black & white theme
- Responsive design
- Dark/Light mode toggle

---

<div align="center">

**Built with ❤️ by Shiva Nayan S**

⭐ If you find this project helpful, please consider giving it a star!

[⬆ Back to top](#-shiva-nayan-s---personal-portfolio-website)

</div>

### Installation Steps

#### 1. Navigate to the Project Directory
```bash
cd portfolio
```

#### 2. Install Dependencies
```bash
npm install
```

This will install:
- `express` - Backend web framework
- `mongoose` - MongoDB object modeling
- `cors` - Cross-Origin Resource Sharing
- `dotenv` - Environment variable management
- `nodemon` - Development auto-reload (dev dependency)

#### 3. Start MongoDB

**Option A: Local MongoDB**
```bash
# Windows - Start MongoDB service (if installed)
mongod

# Or use MongoDB Community Edition:
# Open Services (services.msc) and start MongoDB service
```

**Option B: MongoDB Atlas (Cloud)**
- Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get connection string
- Update the MONGO_URL in `.env` file with your connection string

#### 4. Configure Environment Variables

The `.env` file is already configured with:
```
MONGO_URL=mongodb://localhost:27017/portfolio
PORT=3000
NODE_ENV=development
```

If using MongoDB Atlas, replace `MONGO_URL` with your connection string:
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

#### 5. Start the Server

**For Production:**
```bash
npm start
```

**For Development (with auto-reload):**
```bash
npm run dev
```

You should see:
```
✓ Connected to MongoDB successfully
🚀 Portfolio server is running on http://localhost:3000
```

#### 6. Open in Browser
Visit: **http://localhost:3000**

## 📝 File Descriptions

### Frontend Files

**public/index.html**
- Complete HTML structure with all portfolio sections
- Semantic HTML with proper accessibility

**public/style.css**
- Modern, responsive CSS with CSS variables
- Dark/Light mode theme support
- Smooth animations and transitions
- Mobile-first responsive design
- Gradient backgrounds and interactive elements

**public/script.js**
- Dark mode toggle with localStorage persistence
- Smooth scroll navigation
- Intersection observer for animations
- Active navigation link highlighting

### Backend Files

**server.js**
- Express server setup
- MongoDB connection with Mongoose
- Routes for serving HTML
- Error handling and validation


**.env**
- Configuration file for environment variables
- MONGO_URL - MongoDB connection string
- PORT - Server port (default: 3000)
- NODE_ENV - Environment mode

**package.json**
- Project metadata
- NPM scripts (start, dev)
- Dependencies and versions

## 🔧 How to Use

### Navigation
- Click navigation links to scroll to sections
- Use theme toggle (🌙/☀️) to switch dark/light mode
- Theme preference is saved in browser storage


## 📧 Contact Information

**Email:** kannan2007priyashiju@gmail.com

## 🛠 Troubleshooting

### MongoDB Connection Error
**Problem:** "✗ MongoDB Connection Error" in console

**Solution:**
1. Ensure MongoDB is running:
   ```bash
   mongod  # For local MongoDB
   ```
2. Check MONGO_URL in `.env` file
3. If using MongoDB Atlas, ensure:
   - Cluster is running
   - Connection string is correct
   - Your IP is whitelisted in Network Access

### Port Already in Use
**Problem:** "Error: listen EADDRINUSE :::3000"

**Solution:**
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (Windows)
taskkill /PID <PID> /F

# Or change PORT in .env file
```

### Form Submission Not Working
**Problem:** Form submission returns error

**Solution:**
1. Check browser console (F12) for error messages
2. Ensure MongoDB is connected
3. Verify form fields are not empty
4. Check that email format is valid

### Changes Not Showing
**Problem:** CSS or JavaScript changes not appearing

**Solution:**
1. Hard refresh browser: `Ctrl + Shift + R`
2. Check console for JavaScript errors
3. Ensure files are saved
4. Restart server if using `npm run dev`

## 📦 Deployment

### Deploying to Heroku

1. **Create Heroku account** at [Heroku](https://www.heroku.com)

2. **Install Heroku CLI** and login:
   ```bash
   heroku login
   ```

3. **Create Heroku app:**
   ```bash
   heroku create your-app-name
   ```

4. **Set environment variables:**
   ```bash
   heroku config:set MONGO_URL=your_mongodb_connection_string
   ```

5. **Deploy:**
   ```bash
   git push heroku main
   ```

### Deploying to Other Platforms
- **Vercel** - For frontend (needs API separation)
- **Railway** - Node.js hosting
- **Render** - Full-stack deployment
- **AWS** - EC2 for backend, S3 for frontend

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Guide](https://mongoosejs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Created with ❤️ by Shiva Nayan S

---

**Last Updated:** February 2026

For support or questions, contact: kannan2007priyashiju@gmail.com
#   - s h i v a _ p o r t f o l i o  
 