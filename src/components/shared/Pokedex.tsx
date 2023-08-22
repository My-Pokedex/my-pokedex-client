import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@/types/common';

interface PokedexProps extends DefaultProps {
  children: React.ReactNode;
}

export default function Pokedex({
  children,
  className,
  ...props
}: PokedexProps) {
  return (
    <main
      className={twMerge(
        `relative bg-[url('/assets/img/pokedex.svg')] drop-shadow-lg`,
        className,
      )}
      {...props}>
      {children}
    </main>
  );
}
