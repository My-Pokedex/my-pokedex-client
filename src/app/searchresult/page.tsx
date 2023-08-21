'use client';

import { TypeFilters, Dropdown, PokemonCards } from '@/components';
import { processCardsInfo } from '@/utils/processCardsInfo';
import useSearch from '@/hooks/useSearch';

export default function SearchResult() {
  const { loading, error, pokemonCardsInfo } = useSearch();

  if (loading) return null;
  if (error) return `Error : ${error}`;

  return (
    <>
      <section className="flex flex-col gap-4 mx-5 mt-8 mb-4">
        <h2 className="sr-only">필터 선택</h2>
        <TypeFilters usage="search" lang="ko" />
        <Dropdown />
      </section>
      <main>
        <PokemonCards
          pokemonCardsInfo={processCardsInfo(pokemonCardsInfo, 'ko')}
          lang="ko"
        />
      </main>
    </>
  );
}
