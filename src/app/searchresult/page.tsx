import { TypeFilters, Dropdown, PokemonCards } from '@/components';

export default function SearchResult() {
  return (
    <>
      <section className="flex flex-col gap-4 mx-5 mt-8 mb-4">
        <h2 className="sr-only">필터 선택</h2>
        <TypeFilters usage="search" lang="ko" />
        <Dropdown />
      </section>
      <main>
        <PokemonCards lang="ko" />
      </main>
    </>
  );
}
