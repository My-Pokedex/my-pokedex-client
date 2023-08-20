import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@/types/common';
import { LOGO_URL } from '@/constants/urls';

type Location = 'main' | 'pokedex' | 'header';

interface LogoProps extends DefaultProps {
  location: Location;
}

export default function Logo({ location, className }: LogoProps) {
  const [width, height] = LOGO_SIZE[location];

  return (
    <Link href="/">
      <Image
        src={LOGO_URL}
        alt="홈 페이지로 이동"
        width={width}
        height={height}
        priority={true}
        className={twMerge('mx-auto drop-shadow-lg', className)}
        style={{ width: width, height: height }}
      />
    </Link>
  );
}

const LOGO_SIZE = {
  main: [380, 140],
  pokedex: [152, 56],
  header: [92, 32],
} as const;
