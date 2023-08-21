import { gql } from '@apollo/client';

const GET_POKEMONS = gql`
  query pokemonCardsInfoQuery(
    $limit: Int!
    $keyword: String!
    $type: String!
    $sort: [pokemon_v2_pokemon_order_by!]
    $lang: String!
  ) {
    pokemonCardsInfo: pokemon_v2_pokemon(
      where: {
        is_default: { _eq: true }
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: {
            pokemon_v2_typenames: {
              pokemon_v2_type: { name: { _iregex: $type } }
            }
          }
        }
        pokemon_v2_pokemonspecy: {
          pokemon_v2_pokemonspeciesnames: {
            _and: {
              name: { _iregex: $keyword }
              pokemon_v2_language: { name: { _eq: $lang } }
            }
          }
        }
      }
      limit: $limit
      order_by: $sort
    ) {
      enName: name
      id: pokemon_species_id
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
  }
`;

export default GET_POKEMONS;
