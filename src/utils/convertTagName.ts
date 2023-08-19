import { TYPE_TAG_CONTENTS } from '@/constants/contents';
import { Lang, PokemonType } from '@/types/common';

export const convertTagName = (lang: Lang, type: PokemonType) =>
  lang === 'kr'
    ? TYPE_TAG_CONTENTS[type]
    : type.charAt(0).toUpperCase() + type.slice(1);
