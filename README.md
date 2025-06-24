# Sohan Talukder - Personal Portfolio

A modern, responsive personal portfolio built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- **Modern Design**: Clean, professional, and eye-catching UI
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive**: Optimized for all device sizes
- **Blog Integration**: Displays latest articles from Medium
- **Contact Form**: Working contact form for inquiries
- **SEO Optimized**: Built with Next.js for optimal performance
- **Accessible**: WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## 📝 Sections

1. **Hero** - Introduction with call-to-action
2. **About** - Personal story and skills showcase
3. **Experience** - Work history and education
4. **Projects** - Featured projects with live demos
5. **Blog** - Latest articles from Medium
6. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── navigation.tsx   # Navigation component
│   │   ├── hero-section.tsx # Hero section
│   │   └── ...             # Other sections
│   └── lib/                # Utilities
├── public/                 # Static assets
└── ...
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/hero-section.tsx` - Name, title, description
- `src/components/about-section.tsx` - About text and skills
- `src/components/experience-section.tsx` - Work experience and education
- `src/components/projects-section.tsx` - Featured projects
- `src/components/contact-section.tsx` - Contact information

### Styling
- Global styles: `src/app/globals.css`
- Theme configuration: `tailwind.config.js`
- shadcn/ui components: `src/components/ui/`

### Blog Integration
The blog section currently uses mock data. To integrate with Medium:
1. Set up Medium RSS feed parsing
2. Update `src/components/blog-section.tsx`
3. Consider using a service like RSS2JSON for CORS handling

## 📱 Adding Images

Place your images in the `public/` directory:
- `profile.jpg` - Your profile picture
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Firebase Hosting**: `npm run build` then `firebase deploy`
- **GitHub Pages**: Use GitHub Actions for deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Contact

Md. Sohan Talukder Akash
- Website: [sohantalukder.netlify.app](https://sohantalukder.netlify.app)
- GitHub: [@sohantalukder](https://github.com/sohantalukder)
- Medium: [@sohantalukder](https://sohantalukder.medium.com)
- LinkedIn: [sohantalukder](https://linkedin.com/in/sohantalukder)

---

⭐ Star this repo if you found it helpful!
