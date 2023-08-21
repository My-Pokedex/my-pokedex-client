'use client';

import PokemonCard from './PokemonCard';
import { DefaultProps, Lang } from '@/types/common';
import useSearch from '@/hooks/useSearch';
import { processCardsInfo } from '@/utils/processCardsInfo';

interface PokemonCardsProps extends DefaultProps {
  lang: Lang;
}

export default function PokemonCards({ lang }: PokemonCardsProps) {
  const { loading, error, pokemonCardsInfo } = useSearch();

  if (loading) return null;
  if (error) return `Error : ${error}`;

  const processed = processCardsInfo(pokemonCardsInfo, lang);

  return (
    <section
      className={
        'grid grid-cols-3 gap-4 max-2cards:grid-cols-2 max-1cards:grid-cols-1 mb-[5rem]'
      }>
      <h2 className="sr-only">검색 결과</h2>
      {processed.map((pokemonCardInfo) => (
        <PokemonCard
          key={pokemonCardInfo.id}
          pokemonCardInfo={pokemonCardInfo}
          lang={lang}
        />
      ))}
    </section>
  );
}
