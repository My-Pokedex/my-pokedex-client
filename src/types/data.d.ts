import { PokemonEnType, PokemonKrType } from './common';

export interface PokemonInfo {
  enName: string;
  id: number;
  types: {
    type: { name: PokemonType };
  }[];
  specy: { krName: { name: string }[] };
}

export type PokemonCardsInfo = PokemonInfo[];
