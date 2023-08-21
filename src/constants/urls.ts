export const LOGO_URL = '/assets/img/logo.svg';

export const LINK_DEFAULT_URL = {
  signin: '/signin',
  signout: '/',
  searchResult: '/searchresult?keyword=&type=all&sort=id-asc',
  compatibility: '/compatibility?type=normal',
  combinations: '/',
} as const;

export const SORT_QUERIES = [
  'id-asc',
  'id-desc',
  'height-asc',
  'height-desc',
  'weight-asc',
  'weight-desc',
] as const;

export const POKEMON_IMAGE_URL = {
  gif: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
  png: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
} as const;
