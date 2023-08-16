import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Platinum Discoveries',
  description:
    'Study, Work, Relocate Abroad Easily, Book Flight, Rent and Buy Apartment',
  icons: {
    icon: { url: 'images/platIcon.png', type: 'image/png' },
    shortcut: { url: "images/platIcon.png", type: "image/png" },
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
