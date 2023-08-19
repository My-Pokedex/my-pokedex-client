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
  ...props
}: PokemonImageProps) {
  const { imgUrl, format } = await getImageInfo(id);

  const imgSize = POKEMON_IMAGE_SIZE[format][type];

  return (
    <Image
      src={imgUrl}
      alt={`${name}의 모습`}
      width={imgSize}
      height={imgSize}
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
