export const metadata = {
  title: 'SoftSell - Sell Your Software Licenses Securely',
  description: 'SoftSell is a secure platform for selling your unused software licenses. Get the best market rates for Microsoft, Adobe, and other software licenses.',
  keywords: 'software licenses, sell software, Microsoft licenses, Adobe licenses, software resale, license marketplace',
  authors: [{ name: 'SoftSell Team' }],
  creator: 'SoftSell',
  publisher: 'SoftSell',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sell-stack.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SoftSell - Sell Your Software Licenses Securely',
    description: 'SoftSell is a secure platform for selling your unused software licenses. Get the best market rates for Microsoft, Adobe, and other software licenses.',
    url: 'https://sell-stack.vercel.app/',
    siteName: 'SoftSell',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SoftSell - Software License Marketplace',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftSell - Sell Your Software Licenses Securely',
    description: 'SoftSell is a secure platform for selling your unused software licenses. Get the best market rates for Microsoft, Adobe, and other software licenses.',
    images: ['/twitter-image.jpg'],
    creator: '@softsell',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
}; 