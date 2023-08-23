import { TypeFilters } from '@/components';

export default function Compatibility() {
  return (
    <section className="mx-5 mt-8 mb-12">
      <h2 className="sr-only">필터 선택</h2>
      <TypeFilters usage="compatibility" lang="ko" />
    </section>
  );
}
