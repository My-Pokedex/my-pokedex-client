import { gql } from '@apollo/client';

const GET_DETAIL = gql`
  query pokemonInfoQuery($id: Int!) {
    basicInfo: pokemon_v2_pokemon(
      where: {
        pokemon_species_id: { _eq: $id }
        _and: { is_default: { _eq: true } }
      }
    ) {
      enName: name
      id: pokemon_species_id
      height
      weight
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      specy: pokemon_v2_pokemonspecy {
        koName: pokemon_v2_pokemonspeciesnames(
          where: { language_id: { _eq: 3 } }
        ) {
          name
        }
      }
    }
    feature: pokemon_v2_pokemonspeciesname(
      where: { pokemon_species_id: { _eq: $id }, language_id: { _in: [3, 9] } }
    ) {
      contents: genus
    }
    description: pokemon_v2_pokemonspeciesflavortext(
      where: {
        language_id: { _in: [3, 9] }
        version_id: { _in: [23, 33] }
        pokemon_species_id: { _eq: $id }
      }
    ) {
      contents: flavor_text
    }
    abilities: pokemon_v2_pokemonability(where: { pokemon_id: { _eq: $id } }) {
      isHidden: is_hidden
      info: pokemon_v2_ability {
        enName: name
        description: pokemon_v2_abilityflavortexts(
          where: { language_id: { _in: [3, 9] }, version_group_id: { _eq: 20 } }
        ) {
          contents: flavor_text
        }
        koName: pokemon_v2_abilitynames(where: { language_id: { _eq: 3 } }) {
          name
        }
      }
    }
    stats: pokemon_v2_pokemonstat(where: { pokemon_id: { _eq: $id } }) {
      value: base_stat
    }
    evolutionChain: pokemon_v2_evolutionchain(
      where: { pokemon_v2_pokemonspecies: { id: { _eq: $id } } }
    ) {
      specy: pokemon_v2_pokemonspecies {
        id
        enName: name
        pokemonInfo: pokemon_v2_pokemons {
          types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
              name
            }
          }
        }
        koName: pokemon_v2_pokemonspeciesnames(
          where: { language_id: { _eq: 3 } }
        ) {
          name
        }
      }
    }
  }
`;

export default GET_DETAIL;
