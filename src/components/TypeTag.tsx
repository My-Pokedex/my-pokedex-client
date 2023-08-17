import { DefaultProps, PokemonType } from '@/types/common';
import { TYPE_TAG_CONTENTS } from '@/constants/contents';

type TagUsage = 'button' | 'info';

interface TypeTagProps extends DefaultProps {
  usage: TagUsage;
  type: PokemonType;
}

export default function TypeTag({ usage, type }: TypeTagProps) {
  return (
    <>
      {usage === 'button' && (
        <button
          type="button"
          className={`py-1 pl-[2.125rem] pr-[.625rem] rounded text-white-10 shadow-outer/down bg-[length:24px_24px] bg-[center_left_6px] bg-no-repeat whitespace-nowrap ${TYPE_TAG_BG[type]}`}>
          {TYPE_TAG_CONTENTS[type]}
        </button>
      )}
      {usage === 'info' && (
        <p
          className={`py-[.1875rem] pl-[1.5625rem] pr-[.4375rem] rounded text-[.75rem] text-white-10 shadow-outer/down bg-[length:18px_18px] bg-[center_left_4px] bg-no-repeat whitespace-nowrap ${TYPE_TAG_BG[type]}`}>
          {TYPE_TAG_CONTENTS[type]}
        </p>
      )}
    </>
  );
}

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
