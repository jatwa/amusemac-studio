import type { Metadata, Viewport } from 'next';
import './globals.css';
import { FilmGrain } from '@/components/FilmGrain';
import { CustomCursor } from '@/components/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Amusemac Studio — Mad About Cinema',
  description: 'Amusemac Studio is a Mumbai-based film production and creative studio working across films, advertising, documentaries, production design, art direction and visual storytelling.',
  keywords: [
    'Amusemac Studio',
    'Film Production Mumbai',
    'Production Design India',
    'Art Direction',
    'Creative Direction',
    'Commercial Films',
    'Documentary Filmmaking',
    'Cinema Studio',
    'Mad About Cinema'
  ],
  authors: [{ name: 'Amusemac Studio' }],
  creator: 'Amusemac Studio',
  publisher: 'Amusemac Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Amusemac Studio — Mad About Cinema',
    description: 'Amusemac Studio is a Mumbai-based film production and creative studio working across films, advertising, documentaries, production design, art direction and visual storytelling.',
    url: 'https://amusemac.com',
    siteName: 'Amusemac Studio',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Amusemac Studio — Mad About Cinema'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amusemac Studio — Mad About Cinema',
    description: 'Amusemac Studio is a Mumbai-based film production and creative studio working across films, advertising, documentaries, production design, art direction and visual storytelling.',
    creator: '@amusemac',
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop']
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export const viewport: Viewport = {
  themeColor: '#090908',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#090908] text-[#F4EFE6] selection:bg-[#D89B37] selection:text-[#090908]">
        <SmoothScroll>
          <FilmGrain />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
