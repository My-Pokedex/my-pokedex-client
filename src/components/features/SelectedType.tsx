import { twMerge } from 'tailwind-merge';
import { DefaultProps, PokemonType, Lang } from '@/types/common';
import { SELECTED_TYPE_CONTENTS } from '@/constants/contents';
import { convertTypeTagName } from '@/utils/convertTypeTagName';

interface SelectedTypeProps extends DefaultProps {
  type: PokemonType;
  lang: Lang;
}

export default function SelectedType({
  type,
  lang,
  className,
}: SelectedTypeProps) {
  return (
    <p
      className={twMerge(
        'absolute w-[12.625rem] h-9 text-[1.125rem] font-bold text-white-10 text-center leading-9',
        className,
      )}>
      {SELECTED_TYPE_CONTENTS[lang]}
      <span className={TYPE_TEXT_COLOR[type]}>
        {convertTypeTagName(type, lang)}
      </span>
    </p>
  );
}

const TYPE_TEXT_COLOR = {
  normal: 'text-type-normal',
  fire: 'text-type-fire',
  water: 'text-type-water',
  grass: 'text-type-grass',
  electric: 'text-type-electric',
  ice: 'text-type-ice',
  psychic: 'text-type-psychic',
  dragon: 'text-type-dragon',
  fighting: 'text-type-fighting',
  flying: 'text-type-flying',
  ground: 'text-type-ground',
  rock: 'text-type-rock',
  bug: 'text-type-bug',
  ghost: 'text-type-ghost',
  poison: 'text-type-poison',
  dark: 'text-type-dark',
  steel: 'text-type-steel',
  fairy: 'text-type-fairy',
} as const;
