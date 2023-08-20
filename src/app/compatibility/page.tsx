'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  SelectedType,
  TypeFilters,
  Pokedex,
  Logo,
  BattleInfo,
  CommonButton,
} from '@/components';
import { PokemonType } from '@/types/common';

export default function Compatibility() {
  const searchParams = useSearchParams();
  const [type, setType] = useState(searchParams.get('type') as PokemonType);

  useEffect(() => {
    const newType = searchParams.get('type') as PokemonType;

    setType(newType);
  }, [searchParams]);

  return (
    <>
      <section className="mx-5 mt-8 mb-12">
        <TypeFilters usage="compatibility" lang="kr" />
      </section>
      <Pokedex className="w-[36.25rem] min-h-[25.5rem] mb-12 bg-cover">
        <SelectedType
          type={type}
          lang="kr"
          className="top-[9rem] right-[2.75rem]"
        />
        <Logo
          location="pokedex"
          className="absolute bottom-12 right-[4.125rem]"
        />
      </Pokedex>
      <div className="flex flex-col gap-5 max-w-[50.5rem] w-full mx-5">
        <BattleInfo usage="attack" type={type} lang="kr" />
        <BattleInfo usage="defense" type={type} lang="kr" />
      </div>
      <CommonButton type="viewCompatibility" className="my-10" />
    </>
  );
}
