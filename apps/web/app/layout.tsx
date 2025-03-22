import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import { Toaster as Sonner } from '../components/ui/sonner';
import { Toaster } from '../components/ui/toaster';
import { TooltipProvider } from '../components/ui/tooltip';
import './globals.css';
import Template from './template';

export const metadata: Metadata = {
  title: 'Kinaase',
  description: 'Kinaase'
};

const queryClient = new QueryClient();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AnimatePresence mode='wait'>
              <Template>{children}</Template>
            </AnimatePresence>
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
