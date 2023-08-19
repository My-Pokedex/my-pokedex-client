import { DefaultProps, Lang, PokemonType } from '@/types/common';
import { convertTagName } from '@/utils/convertTagName';

type TagUsage = 'button' | 'info';
type TagSize = 'small' | 'large';

interface TypeTagProps extends DefaultProps {
  usage: TagUsage;
  type: PokemonType;
  size: TagSize;
  lang: Lang;
}

export default function TypeTag({ usage, type, size, lang }: TypeTagProps) {
  const tagStyle = `rounded text-white-10 shadow-outer/down bg-no-repeat whitespace-nowrap ${TYPE_TAG_SIZE[size]} ${TYPE_TAG_BG[type]}`;
  const tagName = convertTagName(lang, type);

  return (
    <>
      {usage === 'button' && (
        <button type="button" data-tag-name={type} className={tagStyle}>
          {tagName}
        </button>
      )}
      {usage === 'info' && <p className={tagStyle}>{tagName}</p>}
    </>
  );
}

const TYPE_TAG_SIZE = {
  small:
    'py-1 pl-[1.5625rem] pr-[.4375rem] text-[.75rem] bg-[length:18px_18px] bg-[center_left_4px]',
  large:
    'py-2 pl-[2.125rem] pr-[.625rem] bg-[length:24px_24px] bg-[center_left_6px]',
} as const;

const TYPE_TAG_BG = {
  normal: `bg-[url('/assets/icon/normal.svg')] bg-type-normal`,
  fire: `bg-[url('/assets/icon/fire.svg')] bg-type-fire`,
  water: `bg-[url('/assets/icon/water.svg')] bg-type-water`,
  grass: `bg-[url('/assets/icon/grass.svg')] bg-type-grass`,
  electric: `bg-[url('/assets/icon/electric.svg')] bg-type-electric`,
  ice: `bg-[url('/assets/icon/ice.svg')] bg-type-ice`,
  psychic: `bg-[url('/assets/icon/psychic.svg')] bg-type-psychic`,
  dragon: `bg-[url('/assets/icon/dragon.svg')] bg-type-dragon`,
  fighting: `bg-[url('/assets/icon/fighting.svg')] bg-type-fighting`,
  flying: `bg-[url('/assets/icon/flying.svg')] bg-type-flying`,
  ground: `bg-[url('/assets/icon/ground.svg')] bg-type-ground`,
  rock: `bg-[url('/assets/icon/rock.svg')] bg-type-rock`,
  bug: `bg-[url('/assets/icon/bug.svg')] bg-type-bug`,
  ghost: `bg-[url('/assets/icon/ghost.svg')] bg-type-ghost`,
  poison: `bg-[url('/assets/icon/poison.svg')] bg-type-poison`,
  dark: `bg-[url('/assets/icon/dark.svg')] bg-type-dark`,
  steel: `bg-[url('/assets/icon/steel.svg')] bg-type-steel`,
  fairy: `bg-[url('/assets/icon/fairy.svg')] bg-type-fairy`,
} as const;
