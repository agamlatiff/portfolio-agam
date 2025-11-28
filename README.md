# 💼 Agam Latifullah - Portfolio

> Professional Business Solutions Developer specializing in POS Systems, Inventory Management, and Business Websites for SMEs.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)]([https://agamlatiff.com](https://agamlatiff-website.netlify.app/))
[![License](https://img.shields.io/badge/License-MIT-blue.svg)]
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite)](https://vitejs.dev/)

---

## 🌟 Features

### 🎨 **Modern UI/UX**
- ✨ Glassmorphism design with smooth animations
- 🌓 Dark/Light mode support
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized performance with lazy loading

### 🌍 **Multi-Language Support**
- 🇮🇩 Indonesian
- 🇬🇧 English
- 🔄 Dynamic language switching

### 🛡️ **Security Features**
- 🚫 Rate limiting (anti-spam)
- 🧹 Input sanitization (XSS protection)
- 🍯 Honeypot bot detection
- ✅ Comprehensive form validation

### 📊 **Business Sections**
- 💼 Services showcase
- 🎯 Project portfolio with live demos
- 📈 ROI calculator
- 💬 Client testimonials
- 📞 Secure contact form
- 🤖 AI-powered chat widget

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/agamlatiff/portfolio-agam.git
   cd portfolio-agam
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy example env file
   cp .env.example .env.local
   
   # Add your API keys to .env.local
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   ```
   http://localhost:5173
   ```

---

## 📦 Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

**Build Output:**
- Optimized bundle size: ~200KB (gzipped)
- Lazy-loaded routes for faster initial load
- Code splitting for better caching

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React 18.3** - UI library
- 📘 **TypeScript 5.6** - Type safety
- ⚡ **Vite 6.4** - Build tool
- 🎨 **Tailwind CSS** - Styling
- 🎭 **Framer Motion** - Animations
- 🧭 **React Router** - Navigation

### **Tools & Libraries**
- 🎯 **Lucide React** - Icons
- 🌐 **i18n** - Internationalization
- 📧 **EmailJS** - Email service
- 🤖 **Google Gemini AI** - AI features
- 🔒 **Custom Security** - Rate limiting & validation

---

## 📁 Project Structure

```
portfolio-agam/
├── components/          # React components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── sections/       # Page sections (Hero, About, etc.)
│   ├── ui/             # Reusable UI components
│   └── utils/          # Utility components
├── constants/          # Static data & configurations
│   ├── locales/        # Translation files (id.ts, en.ts)
│   ├── pricing.ts      # Service packages
│   ├── projects.ts     # Portfolio projects
│   └── ...
├── context/            # React contexts (Language, Theme)
├── pages/              # Page components
├── utils/              # Utility functions
│   ├── rateLimiter.ts  # Anti-spam protection
│   ├── inputValidator.ts # Form validation
│   └── emailService.ts # Email integration
├── docs/               # Documentation
│   ├── FORM_SECURITY.md
│   ├── PERFORMANCE_SEO.md
│   └── EMAIL_SETUP.md
└── public/             # Static assets
```

---

## 🔐 Security Features

### **Form Protection**
- ✅ Rate limiting (3 attempts/minute)
- ✅ Input sanitization (XSS prevention)
- ✅ Honeypot field (bot detection)
- ✅ Spam pattern detection
- ✅ Email/phone validation

**Learn more:** [Form Security Guide](docs/FORM_SECURITY.md)

---

## ⚡ Performance Optimizations

### **Implemented**
- ✅ Lazy loading routes (~60% bundle reduction)
- ✅ Code splitting
- ✅ Image optimization
- ✅ Font preloading
- ✅ Efficient caching strategy

### **Results**
- 🎯 Lighthouse Score: 95+
- ⚡ First Contentful Paint: <1s
- 📦 Bundle Size: ~200KB
- 🚀 Time to Interactive: <2.5s

**Learn more:** [Performance & SEO Guide](docs/PERFORMANCE_SEO.md)

---

## 📧 Email Integration

This portfolio uses **EmailJS** for contact form submissions.

### **Setup:**

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
3. Add to `.env.local`
4. Configure template in EmailJS dashboard

**Learn more:** [Email Setup Guide](docs/EMAIL_SETUP.md)

---

## 🌐 Deployment

### **Netlify (Recommended)**

1. **Connect repository:**
   - Login to [Netlify](https://netlify.com)
   - Import from GitHub

2. **Build settings:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment variables:**
   Add all variables from `.env.local`

4. **Deploy!** 🚀

### **Other Platforms**
- ✅ Vercel
- ✅ GitHub Pages
- ✅ Cloudflare Pages

---

## 📚 Documentation

- 📖 [Form Security](docs/FORM_SECURITY.md)
- ⚡ [Performance & SEO](docs/PERFORMANCE_SEO.md)
- 📧 [Email Setup](docs/EMAIL_SETUP.md)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Agam Latifullah**

- 🌐 Website: [agamlatiff.com](https://agamlatiff.com)
- 💼 LinkedIn: [@agamlatiff](https://linkedin.com/in/agamlatiff)
- 🐙 GitHub: [@agamlatiff](https://github.com/agamlatiff)
- 📧 Email: contact@agamlatiff.com

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [EmailJS](https://www.emailjs.com/)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Agam Latifullah](https://github.com/agamlatiff)

</div>
