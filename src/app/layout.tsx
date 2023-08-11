import Link from 'next/link';
import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';

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
    <html lang="ko" className={galmuri.className}>
      <body>
        {children}
        <ul className="border-4 border-gray-30">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/signin">Signin</Link>
          </li>
          <li>
            <Link href="/searchresult">Search Result</Link>
          </li>
          <li>
            <Link href="/pokemon/1">Pokemon Info</Link>
          </li>
          <li>
            <Link href="/compatibility">Compatibility</Link>
          </li>
          <li>
            <Link href="/combinations/1">My Pokemon Combinations</Link>
          </li>
          <li>
            <Link href="/combination/1/1">My Pokemon Combination</Link>
          </li>
        </ul>
      </body>
    </html>
  );
}
