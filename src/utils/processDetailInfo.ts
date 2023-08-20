import { Lang, PokemonType } from '@/types/common';
import { RawPokemonDetailInfo } from '@/types/data';
import { convertName } from './convertName';
import { convertContents } from './convertContents';

export const processDetailInfo = (info: RawPokemonDetailInfo, lang: Lang) => {
  const { basicInfo, feature, description, abilities, stats, evolutionChain } =
    info;
  const {
    enName,
    id,
    height,
    weight,
    types,
    specy: { krName },
  } = basicInfo[0];
  const { specy } = evolutionChain[0];

  const newFeature = feature[0].contents
    ? convertContents(feature, lang)
    : null;

  const newDescription = description.length
    ? convertContents(description, lang)
    : null;

  const newAbilities = abilities[0].info.description.length
    ? abilities.map((abilitiy) => {
        const {
          isHidden,
          info: { enName, description, krName },
        } = abilitiy;

        const name = convertName(enName, krName, lang);
        const newDescription = convertContents(description, lang);

        return { isHidden, name, description: newDescription };
      })
    : null;

  const newStats = [
    ...stats.map(({ value }) => value),
    stats.reduce((sum, { value }) => sum + value, 0),
  ];

  const newEvolutionChain =
    specy.length > 1
      ? specy
          .sort((a, b) => a.id - b.id)
          .map((info) => {
            const { id, enName, krName, pokemonInfo } = info;

            const name = convertName(enName, krName, lang);
            const newTypes = pokemonInfo[0].types.map(
              (type) => type.type.name,
            ) as PokemonType[];

            return { id, name, types: newTypes };
          })
      : null;

  return {
    id,
    name: convertName(enName, krName, lang),
    types: types.map(({ type }) => type.name) as PokemonType[],
    feature: newFeature,
    description: newDescription,
    height,
    weight,
    abilities: newAbilities,
    stats: newStats,
    evolutionChain: newEvolutionChain,
  };
};
