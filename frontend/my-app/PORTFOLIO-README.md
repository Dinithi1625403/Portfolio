# Modern Portfolio Website

A stunning, responsive portfolio website built with Next.js 16, featuring smooth animations, modern design, and optimal performance.

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance Optimized**: Fast loading times with optimized images and code splitting
- **🎭 Smooth Animations**: Beautiful Framer Motion animations throughout
- **♿ Accessibility**: Built with accessibility best practices
- **🔍 SEO Optimized**: Complete meta tags and structured data
- **📊 Analytics Ready**: Easy to integrate with Google Analytics
- **🌙 Modern UI**: Dark theme with professional color scheme

## 🚀 Sections

### Hero Section
- Dynamic typing animation with multiple titles
- Professional introduction and key highlights
- Call-to-action buttons (Explore Work, Download CV)
- Social media links with hover effects
- Animated background elements

### About Section
- Personal introduction with professional photo
- Career summary and background
- Quick contact information
- Interactive stats cards
- Educational background

### Skills Section
- Technical skills with proficiency levels and animated progress bars
- Categorized by Frontend, Backend, Database, and Tools
- Soft skills with interactive icons
- Continuous learning section

### Projects Section
- Featured and all projects filter
- Project cards with hover effects
- Detailed project modal with navigation
- Technology tags
- Live demo and GitHub links

### Experience Section
- Timeline layout with professional experience
- Key achievements for each role
- Career stats sidebar
- Client testimonials
- Current availability status

### Contact Section
- Interactive contact form with validation
- Contact information cards
- Social media links
- Availability indicator
- Response time information

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── sections/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Hero.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   └── ui/
│       ├── Button.js
│       ├── Card.js
│       ├── ErrorBoundary.js
│       ├── Footer.js
│       ├── Loading.js
│       └── Navigation.js
└── data/
    └── portfolioData.js
```

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## ⚙️ Customization

### 1. Update Personal Information

Edit `/src/data/portfolioData.js` to update:
- Personal details (name, title, bio, contact info)
- Skills and proficiency levels
- Projects and work experience
- Social media links
- Testimonials

### 2. Add Your Resume

Replace `/public/resume.pdf` with your actual resume file.

### 3. Update Images

Replace placeholder images with your actual photos:
- Profile photo: Update `profileImage` in `portfolioData.js`
- Project screenshots: Update project `image` URLs
- Testimonial avatars: Update `avatar` URLs

### 4. Customize Colors

Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### 5. Update Metadata

Edit `/src/app/layout.js` to update:
- SEO metadata
- Open Graph tags
- Twitter Card information
- Site verification codes

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3b82f6 to #2563eb)
- **Secondary**: Dark grays (#0f172a to #1e293b)
- **Accent**: Various colored highlights for interactive elements

### Typography
- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono
- **Sizes**: Responsive typography scale

### Components
- **Buttons**: Primary, secondary, outline, and ghost variants
- **Cards**: Consistent card design with hover effects
- **Navigation**: Smooth scroll navigation with active states
- **Forms**: Styled form inputs with validation states

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)
- **Large Screens**: Optimized for large displays (1280px+)

## ⚡ Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **Lazy Loading**: Components load as they enter the viewport
- **Optimized Fonts**: Font optimization with next/font
- **Minimal Bundle**: Only necessary JavaScript is loaded

## 🌐 SEO Features

- **Meta Tags**: Complete meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD structured data
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawler instructions

## 📊 Analytics Integration

Ready for analytics integration:

1. **Google Analytics 4**:
   - Add your GA4 tracking ID to the layout
   - Track page views and user interactions

2. **Vercel Analytics**:
   - Enable Vercel Analytics in your deployment
   - Monitor performance and user behavior

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with every push

### Other Platforms

The portfolio is compatible with:
- Netlify
- AWS Amplify
- GitHub Pages (with static export)
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or need help customizing the portfolio:

1. Check the documentation above
2. Look at the code comments for guidance
3. Open an issue for bugs or feature requests
4. Contact for custom development needs

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**