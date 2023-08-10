import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const galmuri = localFont({
  src: [
    {
      path: './fonts/Galmuri11.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Galmuri11-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Pokedex',
  description: '나만의 포켓몬 도감, My Pokedex',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={galmuri.className}>
      <body>{children}</body>
    </html>
  );
}
