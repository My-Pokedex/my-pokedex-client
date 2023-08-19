import { Lang } from '@/types/common';
import { PokemonCardsInfo } from '@/types/data';

export const processCardsInfo = (info: PokemonCardsInfo, lang: Lang) => {
  const newCardsInfo = info.map(({ enName, id, types, specy }) => {
    const name = lang === 'kr' ? specy.krName[0].name : enName;
    const newTypes = types.map(({ type }) => type.name);

    return { id, name, types: newTypes, isCatched: false };
  });

  return newCardsInfo;
};
