import TypeFilters from '@components/TypeFilters';
import Dropdown from '@components/Dropdown';
import PokemonTitle from '@components/PokemonTitle';
import PokemonImage from '@components/PokemonImage';

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
        <PokemonImage type="small" id={4} name="파이리" />
        <PokemonImage type="large" id={9} name="리자몽" />
        <PokemonImage type="small" id={1010} name="무쇠잎새" />
      </main>
    </>
  );
}
