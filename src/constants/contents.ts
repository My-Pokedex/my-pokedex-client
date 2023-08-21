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
  kr: {
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
  kr: {
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
  kr: '선택한 타입 : ',
  en: 'Selected : ',
} as const;

export const BATTLE_INFO_TITLES = {
  kr: {
    attack: '공격을 하는 경우',
    defense: '방어를 하는 경우',
  },
  en: {
    attack: 'You Attack',
    defense: 'You Defense',
  },
} as const;

export const BATTLE_INFO_CONTENTS = {
  normal: {
    attack: {
      0.5: ['rock', 'steel'],
      0: ['ghost'],
    },
    defense: {
      2: ['fighting'],
      0: ['ghost'],
    },
  },
  fire: {
    attack: {
      2: ['grass', 'ice', 'bug', 'steel'],
      0.5: ['fire', 'water', 'rock', 'dragon'],
    },
    defense: {
      2: ['water', 'ground', 'rock'],
      0.5: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'],
    },
  },
  water: {
    attack: {
      2: ['fire', 'ground', 'rock', 'steel'],
      0.5: ['water', 'grass', 'dragon'],
    },
    defense: {
      2: ['grass', 'electric'],
      0.5: ['fire', 'water', 'ice', 'steel'],
    },
  },
  grass: {
    attack: {
      2: ['water', 'ground', 'rock'],
      0.5: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
    },
    defense: {
      2: ['fire', 'ice', 'poison', 'flying', 'bug'],
      0.5: ['water', 'grass', 'electric', 'ground'],
    },
  },
  electric: {
    attack: {
      2: ['water', 'flying'],
      0.5: ['grass', 'dragon', 'electric'],
      0: ['ground'],
    },
    defense: {
      2: ['ground'],
      0.5: ['electric', 'flying', 'steel'],
    },
  },
  ice: {
    attack: {
      2: ['grass', 'ground', 'flying', 'dragon'],
      0.5: ['fire', 'water', 'ice', 'steel'],
    },
    defense: {
      2: ['fire', 'fighting', 'rock', 'steel'],
      0.5: ['ice'],
    },
  },
  psychic: {
    attack: {
      2: ['fighting', 'poison'],
      0.5: ['psychic', 'steel'],
      0: ['dark'],
    },
    defense: {
      2: ['bug', 'dark', 'ghost'],
      0.5: ['fighting', 'psychic'],
    },
  },
  dragon: {
    attack: {
      2: ['dragon'],
      0.5: ['steel'],
      0: ['fairy'],
    },
    defense: {
      2: ['dragon', 'ice', 'fairy'],
      0.5: ['grass', 'fire', 'water', 'electric'],
    },
  },
  fighting: {
    attack: {
      2: ['normal', 'ice', 'ground', 'dark', 'steel'],
      0.5: ['poison', 'flying', 'psychic', 'bug', 'fairy'],
      0: ['ghost'],
    },
    defense: {
      2: ['flying', 'psychic', 'fairy'],
      0.5: ['bug', 'ground', 'dark'],
    },
  },
  flying: {
    attack: {
      2: ['grass', 'fighting', 'bug'],
      0.5: ['electric', 'ground', 'steel'],
    },
    defense: {
      2: ['electric', 'ice', 'ground'],
      0.5: ['grass', 'fighting', 'bug'],
      0: ['ground'],
    },
  },
  ground: {
    attack: {
      2: ['fire', 'electric', 'poison', 'rock', 'steel'],
      0.5: ['grass', 'bug'],
      0: ['flying'],
    },
    defense: {
      2: ['water', 'grass', 'ice'],
      0.5: ['poison', 'rock'],
      0: ['electric'],
    },
  },
  rock: {
    attack: {
      2: ['fire', 'ice', 'flying', 'bug'],
      0.5: ['fighting', 'ground', 'steel'],
    },
    defense: {
      2: ['water', 'grass', 'ground', 'steel'],
      0.5: ['normal', 'fire', 'poison', 'flying'],
    },
  },
  bug: {
    attack: {
      2: ['grass', 'psychic', 'dark'],
      0.5: ['fire', 'fighting', 'ghost', 'flying', 'steel', 'fairy', 'poison'],
    },
    defense: {
      2: ['fire', 'flying', 'rock'],
      0.5: ['grass', 'fighting', 'ground'],
    },
  },
  ghost: {
    attack: {
      2: ['psychic', 'ghost'],
      0.5: ['dark'],
      0: ['normal'],
    },
    defense: {
      2: ['ghost', 'dark'],
      0.5: ['poison', 'bug'],
      0: ['normal', 'fighting'],
    },
  },
  poison: {
    attack: {
      2: ['grass', 'fairy'],
      0.5: ['poison', 'ground', 'rock', 'ghost'],
      0: ['steel'],
    },
    defense: {
      2: ['ground', 'psychic'],
      0.5: ['grass', 'fighting', 'poison', 'bug', 'fairy'],
    },
  },
  dark: {
    attack: {
      2: ['psychic', 'ghost'],
      0.5: ['fighting', 'dark', 'fairy'],
    },
    defense: {
      2: ['fighting', 'bug', 'fairy'],
      0.5: ['ghost', 'dark'],
      0: ['psychic'],
    },
  },
  steel: {
    attack: {
      2: ['ice', 'rock', 'fairy'],
      0.5: ['fire', 'water', 'electric', 'steel'],
    },
    defense: {
      2: ['fire', 'fighting', 'ground'],
      0.5: [
        'normal',
        'grass',
        'ice',
        'flying',
        'psychic',
        'bug',
        'rock',
        'dragon',
        'steel',
        'fairy',
      ],
      0: ['poison'],
    },
  },
  fairy: {
    attack: {
      2: ['dragon', 'fighting', 'dark'],
      0.5: ['fire', 'poison', 'steel'],
    },
    defense: {
      2: ['poison', 'steel'],
      0.5: ['fighting', 'bug', 'dark'],
      0: ['dragon'],
    },
  },
} as const;
