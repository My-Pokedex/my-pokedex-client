import { POKEMON_IMAGE_URL } from '@/constants/urls';

export const getImageInfo = async (id: number) => {
  const gifUrl = `${POKEMON_IMAGE_URL.gif}${id}.gif`;
  const pngUrl = `${POKEMON_IMAGE_URL.png}${id}.png`;

  const response = await fetch(gifUrl);

  return {
    imgUrl: response.ok ? gifUrl : pngUrl,
    format: response.ok ? 'gif' : 'png',
  } as const;
};
