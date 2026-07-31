# Md. Sohan Talukder - Personal Portfolio

A modern, responsive personal portfolio built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

🌐 **Live Demo**: [https://sohantalukder.github.io/](https://sohantalukder.github.io/)

## ✨ Features

- **Modern Design**: Clean, professional, and eye-catching UI
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive**: Optimized for all device sizes
- **Blog Integration**: Displays latest articles from Medium
- **Contact Form**: Working contact form for inquiries
- **SEO Optimized**: Built with Next.js for optimal performance
- **Accessible**: WCAG compliant components
- **GitHub Pages**: Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: GitHub Pages with GitHub Actions

## 📝 Sections

1. **Hero** - Introduction with call-to-action
2. **About** - Personal story and skills showcase
3. **Experience** - Work history and education
4. **Projects** - Featured projects with live demos
5. **Blog** - Latest articles from Medium
6. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 22
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sohantalukder/sohantalukder.github.io.git
cd sohantalukder.github.io
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
├── .github/
│   └── workflows/
│       ├── ci.yml          # Pull-request validation
│       └── deploy.yml      # Staging-to-production deployment
└── ...
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/lib/site-config.ts` - Canonical URL, primary name, title, description, social profiles, and shared images
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

### GitHub Pages (Current Setup)

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. Here's how it works:

1. **Automatic Deployment**: Every push to the `staging` branch triggers the production workflow
2. **Pull Request Validation**: Pull requests targeting `staging` run lint, type checks, the production build, and SEO export checks without deploying
3. **Build Process**: GitHub Actions builds the Next.js app as a static site
4. **Live Site**: The site is deployed to [https://sohantalukder.github.io/](https://sohantalukder.github.io/)

#### To deploy your own version:

1. Fork this repository
2. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
3. Merge reviewed changes into the `staging` branch
4. GitHub Actions will verify and deploy the static export

#### Manual Build for Testing:
```bash
npm run verify # Lints, type-checks, builds, and validates SEO output
```

## ⚙️ GitHub Actions Workflow

The deployment is handled by `.github/workflows/deploy.yml` which:
- Installs Node.js 22 and dependencies
- Runs the full verification pipeline
- Deploys to GitHub Pages
- Runs only on pushes to `staging`

Pull requests are handled by `.github/workflows/ci.yml`. They run the same verification pipeline but never receive GitHub Pages write permissions and cannot deploy production.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Contact

**Md. Sohan Talukder**
- 🌐 Website: [https://sohantalukder.github.io/](https://sohantalukder.github.io/)
- 💼 GitHub: [@sohantalukder](https://github.com/sohantalukder)
- 📝 Medium: [@sohantalukder](https://sohantalukder.medium.com)
- 💼 LinkedIn: [sohantalukder](https://linkedin.com/in/sohantalukder)

---

⭐ **Star this repo if you found it helpful!**

## 🔧 Troubleshooting

### Common Issues:
1. **Build Errors**: Make sure all dependencies are installed with `npm install`
2. **GitHub Pages Not Updating**: Check the Actions tab for deployment status
3. **Images Not Loading**: Ensure images are in the `public/` directory
4. **Styling or SEO Issues**: Run `npm run verify` locally to validate the production export

### Environment Setup:
- Node.js version: 22
- Next.js: 15.5.14
- Static export enabled for GitHub Pages compatibility
