import { DefaultProps, PokemonType, PokemonStat } from '@/types/common';

type TagUsage = 'ability' | 'stat';

interface InfoTagProps extends DefaultProps {
  usage: TagUsage;
  type?: PokemonType;
  stat?: PokemonStat;
  children: React.ReactNode;
}

export default function InfoTag({ usage, type, stat, children }: InfoTagProps) {
  const abilityBg = type && `bg-type-${type}`;
  const statBg = stat && INFO_TAG_STAT_BG[stat];

  return (
    <h4
      className={`w-max px-4 py-[.625rem] rounded-full text-white-10 font-bold whitespace-nowrap shadow-md ${
        usage === 'ability' ? abilityBg : statBg
      }`}>
      {children}
    </h4>
  );
}

const INFO_TAG_STAT_BG = {
  hp: 'bg-stat-hp',
  attack: 'bg-stat-attack',
  defense: 'bg-stat-defense',
  's-attack': 'bg-stat-s-attack',
  's-defense': 'bg-stat-s-defense',
  speed: 'bg-stat-speed',
  total: 'bg-stat-total',
};
