import TypeFilters from '@components/TypeFilters';
import Dropdown from '@components/Dropdown';
import PokemonCard from '@components/PokemonCard';
import { processCardsInfo } from '@/utils/processCardsInfo';
import pokemons from '@/mocks/pokemons.json';

export default function SearchResult() {
  return (
    <>
      <section className="flex flex-col space-y-4">
        <h2 className="sr-only">필터 선택</h2>
        <TypeFilters usage="search" lang="kr" />
        <Dropdown />
      </section>
      <main className="relative">
        <PokemonCard
          pokemonInfo={processCardsInfo(pokemons.data.pokemonInfo, 'kr')[0]}
          lang="kr"
        />
      </main>
    </>
  );
}
