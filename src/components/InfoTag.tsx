import { DefaultProps, PokemonType, PokemonStat } from '@/types/common';

type TagUsage = 'ability' | 'stat';

interface InfoTagProps extends DefaultProps {
  usage: TagUsage;
  type?: PokemonType;
  stat?: PokemonStat;
  children: React.ReactNode;
}

export default function InfoTag({ usage, type, stat, children }: InfoTagProps) {
  const tagBg = usage === 'ability' ? `bg-type-${type}` : `bg-stat-${stat}`;

  return (
    <dt
      className={`px-4 py-[.625rem] rounded-full text-white-10 font-bold whitespace-nowrap shadow-md ${tagBg}`}>
      {children}
    </dt>
  );
}
