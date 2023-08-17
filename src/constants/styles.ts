export const LOGO_SIZE = {
  main: [380, 140],
  pokedex: [178, 66],
  header: [132, 48],
} as const;

export const AUTH_BUTTON_BG = {
  kakao: 'bg-[#F9E000]',
  naver: 'bg-[#33CE00]',
  google: 'bg-rainbow',
} as const;

export const SEARCH_INPUT_SIZE = {
  main: {
    form: 'w-[30.625rem] h-[4.125rem] border-[.3125rem]',
    search: 'w-[25.25rem] ml-[1.25rem] text-xl',
    submit: 'top-[.625rem] right-[.625rem] w-[2.25rem] h-[2.25rem]',
  },
  header: {
    form: 'w-[16.625rem] h-[2.875rem] border-[.1875rem]',
    search: 'w-[13rem] ml-[.75rem] text-base',
    submit: 'top-[.5rem] right-[.5rem] w-[1.5rem] h-[1.5rem] bg-cover',
  },
} as const;

export const TYPE_TAG_BG = {
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
  posion: `bg-[url('/assets/icon/posion.svg')] bg-type-posion`,
  dark: `bg-[url('/assets/icon/dark.svg')] bg-type-dark`,
  steel: `bg-[url('/assets/icon/steel.svg')] bg-type-steel`,
  fairy: `bg-[url('/assets/icon/fairy.svg')] bg-type-fairy`,
} as const;
