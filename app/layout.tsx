import type {Metadata} from 'next';
import { Inter, JetBrains_Mono, Newsreader } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'PayCore | Programmable Payment Infrastructure',
  description: 'Programmable Payment Infrastructure',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable}`}>
      <body className="bg-[#000000] scroll-smooth font-sans text-white selection:bg-[#E5FF00] selection:text-[#000000] relative" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
