export const LOGO_URL = '/assets/img/logo.svg';

export const NAV_LINK_URL = {
  signin: '/signin',
  signout: '/',
  searchResult: '/searchresult?keyword=&type=all&sort=id-ascending',
  compatibility: '/compatibility',
} as const;

export const SORT_QUERIES = [
  'id-ascending',
  'id-descending',
  'height-ascending',
  'height-descending',
  'weight-ascending',
  'weight-descending',
] as const;
