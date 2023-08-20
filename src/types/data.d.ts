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

export interface RawPokemonDetailInfo {
  basicInfo: {
    enName: string;
    id: number;
    height: number;
    weight: number;
    types: { type: { name: string } }[];
    specy: { krName: { name: string }[] };
  }[];
  feature: { contents: string }[];
  description: { contents: string }[] | [];
  abilities: {
    isHidden: boolean;
    info: {
      enName: string;
      description: { contents: string }[] | [];
      krName: { name: string }[] | [];
    };
  }[];
  stats: { value: number }[];
  evolutionChain: {
    specy: {
      id: number;
      enName: string;
      krName: { name: string }[];
      pokemonInfo: { types: { type: { name: string } }[] }[];
    }[];
  }[];
}
