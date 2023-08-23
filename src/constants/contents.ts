export const NAV_LINK_CONTENTS = {
  signin: '로그인',
  signout: '로그아웃',
  searchResult: '도감',
  compatibility: '상성',
} as const;

export const AUTH_BUTTON_CONTENTS = {
  kakao: '카카오톡 로그인',
  naver: '네이버 로그인',
  google: '구글 로그인',
} as const;

export const HEADER_LINK_TITLES = {
  compatibility: '타입 상성',
  combinations: '나만의 포켓몬 조합',
  signin: '로그인',
  signout: '로그아웃',
} as const;

export const TYPE_TAG_CONTENTS = {
  normal: '노말',
  fire: '불꽃',
  water: '물',
  grass: '풀',
  electric: '전기',
  ice: '얼음',
  psychic: '에스퍼',
  dragon: '드래곤',
  fighting: '격투',
  flying: '비행',
  ground: '땅',
  rock: '바위',
  bug: '벌레',
  ghost: '고스트',
  poison: '독',
  dark: '악',
  steel: '강철',
  fairy: '페어리',
} as const;

export const COMMON_BUTTON_CONTENTS = {
  ko: {
    area: '출현 장소',
    viewAll: '전체 보기',
    move: '배우는 기술',
    viewCompatibility: '전체 상성표 보기',
    newCombination: '새로운 조합 만들기',
    share: '카카오톡 공유하기',
  },
  en: {
    area: 'Appearance Area',
    viewAll: 'View All',
    move: 'Moves',
    viewCompatibility: 'View All Compatibility',
    newCombination: 'Create Combination',
    share: 'Share on KakaoTalk',
  },
} as const;

export const TYPE_FILTERS_TITLES = {
  ko: {
    search: '타입별 보기',
    compatibility: '타입별 상성 보기',
  },
  en: {
    search: 'View by Type',
    compatibility: 'View Effect by Type',
  },
} as const;

export const OPTION_CONTENTS = [
  '도감 번호 작은 순',
  '도감 번호 큰 순',
  '키가 작은 순',
  '키가 큰 순',
  '가벼운 순',
  '무거운 순',
] as const;

export const INFO_TAG_STAT_CONTENTS = {
  hp: 'HP',
  attack: '공격',
  defense: '방어',
  's-attack': '특수공격',
  's-defense': '특수방어',
  speed: '스피드',
  total: '총합',
} as const;

export const SELECTED_TYPE_CONTENTS = {
  ko: '선택한 타입 : ',
  en: 'Selected : ',
} as const;

export const BATTLE_INFO_TITLES = {
  ko: {
    attack: '공격을 하는 경우',
    defense: '방어를 하는 경우',
  },
  en: {
    attack: 'You Attack',
    defense: 'You Defense',
  },
} as const;
