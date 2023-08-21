export const CARDS_LIMIT = 18;

export const BATTLE_INFO_VALUES = {
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
