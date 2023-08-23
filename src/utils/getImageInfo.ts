import { POKEMON_IMAGE_URL } from '@/constants/urls';
import { GIF_LIMIT } from '@/constants/values';

export const getImageInfo = (id: number) => {
  const imgUrl =
    id < GIF_LIMIT
      ? `${POKEMON_IMAGE_URL.gif}${id}.gif`
      : `${POKEMON_IMAGE_URL.png}${id}.png`;
  const format = id < GIF_LIMIT ? 'gif' : 'png';

  return {
    imgUrl,
    format,
  } as const;
};
