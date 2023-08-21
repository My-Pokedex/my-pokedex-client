import { Lang, PokemonType } from '@/types/common';
import { RawPokemonCardsInfo } from '@/types/data';
import { convertName } from './convertName';

export const processCardsInfo = (info: RawPokemonCardsInfo, lang: Lang) => {
  const newCardsInfo = info.map(({ enName, id, types, specy: { koName } }) => ({
    id,
    name: convertName(enName, koName, lang),
    types: types.map(({ type }) => type.name) as PokemonType[],
    isCatched: false,
  }));

  return newCardsInfo;
};
