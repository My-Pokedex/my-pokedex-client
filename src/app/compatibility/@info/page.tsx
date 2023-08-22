'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Pokedex,
  TypeTag,
  Logo,
  SelectedType,
  BattleInfo,
  CommonButton,
} from '@/components';
import { convertTypeTagName } from '@/utils/convertTypeTagName';
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
      <Pokedex className="w-[36.25rem] min-h-[25.5rem] mb-12 bg-cover max-2cards:bg-[url('/assets/img/pokedex_half.svg')] max-2cards:w-[19.3125rem] max-2cards:min-h-[25.5rem]">
        <h2 className="sr-only">{`${convertTypeTagName(type, 'ko')} 타입`}</h2>
        <TypeTag
          usage="compatibility"
          type={type}
          size="polygon"
          lang="ko"
          aria-hidden={true}
          className="absolute top-[9rem] left-[5.375rem]"
        />
        <SelectedType
          type={type}
          lang="ko"
          aria-hidden={true}
          className="top-[9rem] right-[2.75rem] max-2cards:hidden"
        />
        <Logo
          location="pokedex"
          className="absolute bottom-12 right-[4.125rem] max-2cards:hidden"
        />
      </Pokedex>
      <div className="flex flex-col gap-5 max-w-[50.5rem] w-full mx-5">
        <BattleInfo usage="attack" type={type} lang="ko" />
        <BattleInfo usage="defense" type={type} lang="ko" />
      </div>
      <div>
        <CommonButton type="viewCompatibility" lang="ko" className="my-10" />
      </div>
    </>
  );
}
