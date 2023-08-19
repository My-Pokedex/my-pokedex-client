import { PokemonType } from './common';

export interface RawPokemonCardInfo {
  enName: string;
  id: number;
  types: {
    type: { name: string };
  }[];
  specy: { krName: { name: string }[] };
}

export type RawPokemonCardsInfo = RawPokemonCardInfo[];
