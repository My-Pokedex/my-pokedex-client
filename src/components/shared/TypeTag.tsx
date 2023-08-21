import { twMerge } from 'tailwind-merge';
import { DefaultProps, Lang, PokemonType } from '@/types/common';
import { convertTypeTagName } from '@/utils/convertTypeTagName';

type TagUsage = 'button' | 'info' | 'compatibility';
type TagSize = 'small' | 'large' | 'polygon';

interface TypeTagProps extends DefaultProps {
  usage: TagUsage;
  type: PokemonType;
  size: TagSize;
  lang: Lang;
}

export default function TypeTag({
  usage,
  type,
  size,
  lang,
  className,
}: TypeTagProps) {
  const tagStyle = `w-max rounded text-white-10 shadow-outer/down bg-no-repeat whitespace-nowrap ${TYPE_TAG_SIZE[size]} ${TYPE_TAG_BG_DEFAULT[type]}`;
  const tagName = convertTypeTagName(type, lang);

  return (
    <>
      {usage === 'button' && (
        <button
          type="button"
          data-tag-name={type}
          className={`hover:scale-110 transition-all ease-out ${tagStyle}`}>
          {tagName}
        </button>
      )}
      {usage === 'info' && <p className={tagStyle}>{tagName}</p>}
      {usage === 'compatibility' && (
        <p
          className={twMerge(
            `w-[6.25rem] h-[6.75rem] pt-[4.25rem] bg-no-repeat bg-contain bg-center text-[.75rem] font-bold text-white-10 text-center hover:scale-110 transition-all ease-out ${TYPE_TAG_BG_POLYGON[type]}`,
            className,
          )}>
          {tagName}
        </p>
      )}
    </>
  );
}

const TYPE_TAG_SIZE = {
  small:
    'py-1 pl-[1.5625rem] pr-[.4375rem] text-[.75rem] bg-[length:18px_18px] bg-[center_left_4px]',
  large:
    'py-2 pl-[2.125rem] pr-[.625rem] bg-[length:24px_24px] bg-[center_left_6px]',
  polygon: 'w-[6.25rem] h-[7.75rem]',
} as const;

const TYPE_TAG_BG_DEFAULT = {
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

const TYPE_TAG_BG_POLYGON = {
  normal: `bg-[url('/assets/img/bg_polygon/normal.svg')]`,
  fire: `bg-[url('/assets/img/bg_polygon/fire.svg')]`,
  water: `bg-[url('/assets/img/bg_polygon/water.svg')]`,
  grass: `bg-[url('/assets/img/bg_polygon/grass.svg')]`,
  electric: `bg-[url('/assets/img/bg_polygon/electric.svg')]`,
  ice: `bg-[url('/assets/img/bg_polygon/ice.svg')]`,
  psychic: `bg-[url('/assets/img/bg_polygon/psychic.svg')]`,
  dragon: `bg-[url('/assets/img/bg_polygon/dragon.svg')]`,
  fighting: `bg-[url('/assets/img/bg_polygon/fighting.svg')]`,
  flying: `bg-[url('/assets/img/bg_polygon/flying.svg')]`,
  ground: `bg-[url('/assets/img/bg_polygon/ground.svg')]`,
  rock: `bg-[url('/assets/img/bg_polygon/rock.svg')]`,
  bug: `bg-[url('/assets/img/bg_polygon/bug.svg')]`,
  ghost: `bg-[url('/assets/img/bg_polygon/ghost.svg')]`,
  poison: `bg-[url('/assets/img/bg_polygon/poison.svg')]`,
  dark: `bg-[url('/assets/img/bg_polygon/dark.svg')]`,
  steel: `bg-[url('/assets/img/bg_polygon/steel.svg')]`,
  fairy: `bg-[url('/assets/img/bg_polygon/fairy.svg')]`,
} as const;
