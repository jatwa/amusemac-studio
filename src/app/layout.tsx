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
        url: 'https://static.wixstatic.com/media/4ceae7_af6beeddd2d5400ca64a0ea8b24b3b8b~mv2.png',
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
    images: ['https://static.wixstatic.com/media/4ceae7_af6beeddd2d5400ca64a0ea8b24b3b8b~mv2.png']
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
