import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Providers from '../components/providers';
import { Toaster as Sonner } from '../components/ui/sonner';
import { Toaster } from '../components/ui/toaster';
import { TooltipProvider } from '../components/ui/tooltip';
import {
  defaultDescription,
  defaultTitle,
  keywords,
  kinaaseUrl
} from '../lib/constants';
import './globals.css';
import Template from './template';

export const metadata: Metadata = {
  metadataBase: new URL(kinaaseUrl),
  title: {
    default: defaultTitle,
    template: '%s | Kinaase Ltd'
  },
  description: defaultDescription,
  keywords,
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: kinaaseUrl,
    siteName: defaultTitle,
    locale: 'en_GH',
    type: 'website',
    images: [
      {
        url: new URL(`${kinaaseUrl}/images/logo/open-graph.png`),
        width: 1200,
        height: 630,
        alt: 'Kinaase Ltd'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/images/logo/kinaase logo-06.svg',
    shortcut: '/images/logo/kinaase logo-06.svg',
    apple: '/images/logo/kinaase logo-06.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/logo/kinaase logo-06.svg'
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [new URL(`${kinaaseUrl}/images/logo/open-graph.png`)]
  },
  manifest: new URL(`${kinaaseUrl}/site.webmanifest`)
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Navbar />
            <AnimatePresence mode='wait'>
              <Template>{children}</Template>
            </AnimatePresence>
            <Footer />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
