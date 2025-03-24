import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Providers from '../components/providers';
import { Toaster as Sonner } from '../components/ui/sonner';
import { Toaster } from '../components/ui/toaster';
import { TooltipProvider } from '../components/ui/tooltip';
import './globals.css';
import Template from './template';

export const metadata: Metadata = {
  title: 'Kinaase',
  description:
    '“Discover Kinaase Ltd, your trusted corporate services partner, offering expert solutions in corporate governance, business advisory, branding, HR management, and comprehensive IT services, including AI consulting, technology strategy, IT infrastructure, and application support. We empower businesses with tailored strategies for growth, compliance, and operational excellence. Let’s drive success together!”',
  icons: {
    icon: '/images/logo/kinaase logo-06.svg'
  }
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
