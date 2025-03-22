import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
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
        <AnimatePresence mode='wait'>
          <Template>{children}</Template>
        </AnimatePresence>
      </body>
    </html>
  );
}
