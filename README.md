# SoftSell - Software License Marketplace

This is a responsive marketing landing page for SoftSell, a platform for selling unused software licenses. Built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, responsive design with smooth animations
- 🌓 Light/dark mode toggle with system preference detection
- 🤖 AI-powered customer chat widget with example questions
- 📱 Mobile-friendly layout with animated navigation
- 🎨 Custom color scheme with gradient effects
- 📝 Interactive contact form with validation

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://github.com/colinhacks/zod)
- **Icons**: [Heroicons](https://heroicons.com/)

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/Arjunhg/marketing-page.git
```

Second, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
marketing-page/
├── src/
│   ├── app/                  # App router pages
│   ├── components/           # React components
│   │   ├── chat/             # Chat widget components
│   │   ├── layout/           # Layout components (Header, Footer)
│   │   ├── providers/        # Context providers
│   │   └── sections/         # Page sections (Hero, Features, etc.)
│   ├── lib/                  # Utility functions
│   └── styles/               # Global styles
├── public/                   # Static assets
└── ...config files
```

## Customization

### Colors

The site uses a custom color scheme defined in `src/styles/globals.css`. You can modify the colors by adjusting the CSS variables:

```css
:root {
  --primary: #E57373;
  --primary-light: #FFCDD2;
  --secondary: #FF8A65;
  /* other color variables */
}
```

### Content

Most of the content can be edited directly in the respective component files:

- Hero section: `src/components/sections/Hero.jsx`
- Features: `src/components/sections/WhyChooseUs.jsx`
- Process steps: `src/components/sections/HowItWorks.jsx`
- Testimonials: `src/components/sections/Testimonials.jsx`
- Contact form: `src/components/sections/ContactForm.jsx`

### Chat Widget

The AI-powered chat widget uses hardcoded responses based on keywords. To modify these:

1. Edit the example questions in `src/components/chat/ChatWidget.jsx`
2. Modify the response logic in the `getAIResponse` function

To integrate with a real LLM API like Google's Gemini:
1. Obtain an API key from Google Cloud Console
2. Create a `.env.local` file with `NEXT_PUBLIC_GEMINI_API_KEY=your_key_here`
3. Implement the API integration in `src/lib/chat-service.js`

## Deployment

The easiest way to deploy this app is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy!

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/introduction/)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)

## License

[MIT](LICENSE)
