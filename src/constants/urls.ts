export const LOGO_URL = '/assets/img/logo.svg';

export const NAV_LINK_URL = {
  signin: '/signin',
  signout: '/',
  searchResult: '/searchresult?keyword=&type=all&sort=id-ascending',
  compatibility: '/compatibility?type=normal',
} as const;

export const SORT_QUERIES = [
  'id-ascending',
  'id-descending',
  'height-ascending',
  'height-descending',
  'weight-ascending',
  'weight-descending',
] as const;

export const POKEMON_IMAGE_URL = {
  gif: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/',
  png: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
} as const;
