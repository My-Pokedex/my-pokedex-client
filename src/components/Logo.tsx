import Image from 'next/image';
import { LOGO_SIZE } from '@/constants/styles';

type Location = 'main' | 'pokedex' | 'header';

export default function Logo({ location }: { location: Location }) {
  const [width, height] = LOGO_SIZE[location];

  return (
    <Image
      src="/assets/img/logo.svg"
      alt="홈 페이지로 이동"
      width={width}
      height={height}
    />
  );
}
