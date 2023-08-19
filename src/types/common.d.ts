export interface DefaultProps {
  className?: string;
}

export type Lang = 'kr' | 'en';

export type PokemonType =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'psychic'
  | 'dragon'
  | 'fighting'
  | 'flying'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'poison'
  | 'dark'
  | 'steel'
  | 'fairy';

export type PokemonStat =
  | 'hp'
  | 'attack'
  | 'defense'
  | 's-attack'
  | 's-defense'
  | 'speed'
  | 'total';

export interface PokemonCardInfo {
  id: number;
  name: string;
  types: PokemonType[];
  isCatched: boolean;
}
