import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Aviral Goel | AI/ML Engineer',
  description:
    'Interactive AI-powered portfolio of Aviral Goel — AI/ML Engineer specializing in Speech AI, Agentic Systems & Applied Deep Learning. Ask questions and get answers grounded in his real background.',
  keywords: [
    'Aviral Goel',
    'Portfolio',
    'AI/ML Engineer',
    'Speech AI',
    'Agentic Systems',
    'Deep Learning',
    'Interactive',
    'Web Development',
    'Next.js',
    'React',
  ],
  authors: [
    {
      name: 'Aviral Goel',
      url: 'https://github.com/goelavi04',
    },
  ],
  creator: 'Aviral Goel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aviral Goel | AI/ML Engineer',
    description:
      'Interactive AI-powered portfolio that answers questions about Aviral Goel, grounded in his real background.',
    siteName: 'Aviral Goel Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aviral Goel | AI/ML Engineer',
    description:
      'Interactive AI-powered portfolio that answers questions about Aviral Goel, grounded in his real background.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}
      >
        <main className="flex min-h-screen flex-col">{children}</main>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
