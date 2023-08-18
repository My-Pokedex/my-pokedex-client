import Image from 'next/image';
import { DefaultProps } from '@/types/common';
import { getImageInfo } from '@/utils/getImageInfo';

type ImageType = 'small' | 'large';

interface PokemonImageProps extends DefaultProps {
  type: ImageType;
  id: number;
  name: string;
}

export default async function PokemonImage({
  type,
  id,
  name,
}: PokemonImageProps) {
  const { imgUrl, format } = await getImageInfo(id);

  return (
    <Image
      src={imgUrl}
      alt={`${name}의 모습`}
      width={POKEMON_IMAGE_SIZE[format][type]}
      height={POKEMON_IMAGE_SIZE[format][type]}
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
