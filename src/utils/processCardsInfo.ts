import { Lang, PokemonType } from '@/types/common';
import { RawPokemonCardsInfo } from '@/types/data';

export const processCardsInfo = (info: RawPokemonCardsInfo, lang: Lang) => {
  const newCardsInfo = info.map(({ enName, id, types, specy }) => {
    const name = lang === 'kr' ? specy.krName[0].name : enName;

    return {
      id,
      name,
      types: types.map(({ type }) => type.name) as PokemonType[],
      isCatched: false,
    };
  });

  return newCardsInfo;
};
