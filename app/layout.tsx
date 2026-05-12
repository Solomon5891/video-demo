import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'FieldTech | #1 AI Field Service Management Software — Voice-to-Invoice for HVAC, Plumbing, Electrical & All Trades',
  description:
    "FieldTech turns a 60-second voice note into a CRM-synced, payment-ready invoice in seconds. Voice-to-Invoice in 12 languages. QR-code payments, GPS route optimizer, smart contracts — built for HVAC, plumbing, electrical, roofing, landscaping & every trade.",
  metadataBase: new URL('https://fieldtechatx.com'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
  openGraph: {
    title: 'FieldTech — #1 AI Field Service Platform | Voice-to-Invoice in 5 Seconds',
    description:
      'Turn voice notes into professional invoices instantly. Smart Pricing AI, digital signatures, QR payments, GPS route optimizer & booking portal — built for every home service trade.',
    images: ['/opengraph.jpg'],
    type: 'website',
    siteName: 'FieldTech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FieldTech — Voice-to-Invoice in 5 Seconds',
    description:
      'The only platform that turns a field tech\'s voice into a professional invoice in under 5 seconds. 12 languages. Built for every trade.',
    images: ['/opengraph.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#FF3C00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
