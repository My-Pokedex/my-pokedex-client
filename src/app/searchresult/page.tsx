import { TypeFilters, Dropdown, PokemonCards } from '@/components';
import { processCardsInfo } from '@/utils/processCardsInfo';
import pokemons from '@/mocks/pokemons.json';

export default function SearchResult() {
  const processed = processCardsInfo(pokemons.data.pokemonCardsInfo, 'kr');

  return (
    <>
      <section className="flex flex-col gap-4 mx-5 mt-[3.75rem] mb-4">
        <h2 className="sr-only">필터 선택</h2>
        <TypeFilters usage="search" lang="kr" />
        <Dropdown />
      </section>
      <main>
        <PokemonCards pokemonCardsInfo={processed} lang="kr" />
      </main>
    </>
  );
}
