import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary', display: 'swap' });
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'], variable: '--font-secondary', display: 'swap' });

export const metadata: Metadata = {
  title: 'InvisiShield ArmorFilm™ - We Stop Bullets. #Clearly.',
  description: 'Next-generation transparent armor technology. Life-saving ballistic window film protection for schools, police, government, and commercial buildings.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
