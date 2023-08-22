'use client';

import { twMerge } from 'tailwind-merge';
import { Logo, Pokedex } from '@/components';
import { DefaultProps } from '@/types/common';
import useTyping from '@/hooks/useTyping';

export default function Loading({ className }: DefaultProps) {
  const { divRef } = useTyping();

  return (
    <Pokedex
      aria-live="assertive"
      className={twMerge(
        "w-[36.25rem] min-h-[25.5rem] mx-auto my-[1rem] bg-cover bounce max-2cards:bg-[url('/assets/img/pokedex_half.svg')] max-2cards:w-[19.3125rem] max-2cards:min-h-[25.5rem]",
        className,
      )}>
      <div
        aria-hidden={true}
        className="absolute top-[10.625rem] left-[6.75rem] w-14 h-14 bg-[url('/assets/img/loading.gif')]"
      />
      <div
        ref={divRef}
        aria-hidden={true}
        className="absolute top-[9.4375rem] right-[5.875rem] w-[6.3125rem] text-xl font-bold text-white-10 whitespace-nowrap overflow-hidden max-2cards:hidden"
      />
      <Logo
        location="pokedex"
        className="absolute bottom-12 right-[4.125rem] max-2cards:hidden"
      />
    </Pokedex>
  );
}
