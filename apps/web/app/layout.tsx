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
  description: 'Kinaase'
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
