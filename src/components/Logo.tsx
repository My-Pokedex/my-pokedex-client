import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { LOGO_SIZE } from '@/constants/styles';
import { DefaultProps } from '@/types/props';

type Location = 'main' | 'pokedex' | 'header';

interface LogoProps extends DefaultProps {
  location: Location;
}

export default function Logo({ location, className }: LogoProps) {
  const [width, height] = LOGO_SIZE[location];

  return (
    <Link href="/">
      <Image
        src="/assets/img/logo.svg"
        alt="홈 페이지로 이동"
        width={width}
        height={height}
        className={twMerge('mx-auto drop-shadow-lg', className)}
      />
    </Link>
  );
}
