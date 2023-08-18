import Dropdown from '@components/Dropdown';
import TypeFilters from '@components/TypeFilters';

export default function SearchResult() {
  return (
    <section className="flex flex-col space-y-4">
      <h2 className="sr-only">필터 선택</h2>
      <TypeFilters usage="search" />
      <Dropdown />
    </section>
  );
}
