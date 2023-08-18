import TypeFilters from '@components/TypeFilters';
import Dropdown from '@components/Dropdown';
import PokemonTitle from '@components/PokemonTitle';

export default function SearchResult() {
  return (
    <>
      <section className="flex flex-col space-y-4">
        <h2 className="sr-only">필터 선택</h2>
        <TypeFilters usage="search" />
        <Dropdown />
      </section>
      <main>
        <PokemonTitle usage="card" id={1} name="이상해씨" />
        <PokemonTitle usage="detail" id={1} name="이상해씨" />
        <PokemonTitle usage="evolution" id={1} name="이상해씨" />
      </main>
    </>
  );
}
