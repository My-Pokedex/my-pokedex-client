const tokens = {
  colors: {
    blue: {
      10: '#70cdff',
      30: '#4e8ff9',
      50: '#3663ad',
      70: '#233f6f',
      90: '#162947',
    },
    yellow: {
      10: '#ffff51',
      30: '#fff406',
      50: '#ffcb05',
      70: '#cca204',
      90: '#a38203',
    },
    red: {
      10: '#ff8172',
      30: '#ff5949',
      50: '#f73526',
      70: '#c62a1e',
      90: '#9e2218',
    },
    green: {
      10: '#75b798',
      30: '#479f76',
      50: '#198754',
      70: '#146c43',
      90: '#0f5132',
    },
    white: { 10: '#fefefe', 30: '#f9fafb', 50: '#f8f9fa' },
    gray: { 10: '#c6c7c8', 30: '#959596', 50: '#7a7c7f', 70: '#4d5154' },
    black: { 10: '#212529', 30: '#1a1e21', 50: '#141619' },
    type: {
      fire: '#ff9c54',
      normal: '#9099a1',
      electric: '#f3d23b',
      water: '#4d90d5',
      grass: '#63bb5b',
      dragon: '#096dc4',
      flying: '#92aade',
      ice: '#74cec0',
      fighting: '#ce4069',
      psychic: '#f97176',
      ghost: '#5269ac',
      poison: '#ab6ac8',
      bug: '#90c12c',
      rock: '#c7b78b',
      ground: '#d97746',
      steel: '#5a8ea1',
      dark: '#5a5366',
      fairy: '#ec8fe6',
    },
    stat: {
      hp: '#e44343',
      attack: '#ef8941',
      defense: '#f2c81f',
      specialAttack: '#7195e9',
      specialDefense: '#79c653',
      speed: '#ee759a',
      sum: '#a77cef',
    },
  },
  fontSize: { base: '1rem', lg: '1.5rem', xl: '2rem', '2xl': '2.5rem' },
  boxShadow: {
    'outer/down': '0px 4px 4px 0px rgba(0,0,0,0.25)',
    'outer/rightdown': '2px 2px 4px 0px rgba(0,0,0,0.3)',
    'inner/top/white': 'inset 1px 2px 4px 4px rgba(255,255,255,1)',
  },
  borderRadius: {
    none: '0',
    default: '0.25rem',
    xl: '0.5rem',
    '2xl': '0.75rem',
    '3xl': '1.125rem',
    '4xl': '1.5rem',
    '5xl': '1.625rem',
    '6xl': '2rem',
    '7xl': '2.5rem',
  },
};

export default tokens;