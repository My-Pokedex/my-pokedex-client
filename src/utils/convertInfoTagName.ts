import { INFO_TAG_STAT_CONTENTS } from '@/constants/contents';
import { Lang, PokemonStat } from '@/types/common';

export const convertInfoTagName = (stat: PokemonStat, lang: Lang) => {
  if (lang === 'ko') return INFO_TAG_STAT_CONTENTS[stat];

  switch (stat) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'Attack';
    case 'defense':
      return 'Defense';
    case 's-attack':
      return 'S-Attack';
    case 's-defense':
      return 'S-Defense';
    case 'speed':
      return 'Speed';
    case 'total':
      return 'Total';
  }
};
