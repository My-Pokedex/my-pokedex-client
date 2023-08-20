import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@/types/common';

interface PokedexProps extends DefaultProps {
  children: React.ReactNode;
}

export default function Pokedex({ children, className }: PokedexProps) {
  return (
    <main
      className={twMerge(
        `w-[42.5rem] min-h-[29.875rem] bg-[url('/assets/img/pokedex.svg')]`,
        className,
      )}>
      {children}
    </main>
  );
}
