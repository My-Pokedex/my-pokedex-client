import { TYPE_TAG_CONTENTS } from '@/constants/contents';
import { Lang, PokemonType } from '@/types/common';

export const convertTypeTagName = (type: PokemonType, lang: Lang) =>
  lang === 'ko'
    ? TYPE_TAG_CONTENTS[type]
    : type.charAt(0).toUpperCase() + type.slice(1);
