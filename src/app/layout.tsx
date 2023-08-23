import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';

const galmuri = localFont({
  src: [
    {
      path: 'fonts/Galmuri11.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Galmuri11-Bold.woff2',
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
    <html lang="ko" className={`h-full ${galmuri.className}`}>
      <body className="h-full bg-[#7FAD71]">
        <h1 className="sr-only">My Pokedex</h1>
        {children}
      </body>
    </html>
  );
}
