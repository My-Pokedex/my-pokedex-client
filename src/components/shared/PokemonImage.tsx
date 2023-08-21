import Image from 'next/image';
import { DefaultProps } from '@/types/common';
import { getImageInfo } from '@/utils/getImageInfo';

type ImageSize = 'small' | 'large';

interface PokemonImageProps extends DefaultProps {
  size: ImageSize;
  id: number;
  name: string;
}

export default function PokemonImage({
  size,
  id,
  name,
  ...props
}: PokemonImageProps) {
  const { imgUrl, format } = getImageInfo(id);

  const imgSize = POKEMON_IMAGE_SIZE[format][size];

  return (
    <Image
      src={imgUrl}
      alt={`${name}의 모습`}
      width={imgSize}
      height={imgSize}
      loading="lazy"
      style={{ width: imgSize, height: imgSize, objectFit: 'contain' }}
      {...props}
    />
  );
}

const POKEMON_IMAGE_SIZE = {
  gif: {
    small: 88,
    large: 108,
  },
  png: {
    small: 116,
    large: 136,
  },
} as const;
