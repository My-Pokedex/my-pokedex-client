'use client';

import { useRouter } from 'next/navigation';
import { usePageStore } from '@/stores';
import { TypeTag, CommonButton } from '@/components';
import { DefaultProps, Lang, PokemonType } from '@/types/common';
import { TYPE_TAG_CONTENTS, TYPE_FILTERS_TITLES } from '@/constants/contents';

type FilterUsage = 'search' | 'compatibility';

interface TypeFiltersProps extends DefaultProps {
  usage: FilterUsage;
  lang: Lang;
}

export default function TypeFilters({ usage, lang }: TypeFiltersProps) {
  const router = useRouter();
  const { resetPage } = usePageStore();

  const handleFilterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;

    if (e.target instanceof HTMLElement && e.target.dataset.type) {
      const newTypeQuery = e.target.dataset.type;

      if (usage === 'search') {
        resetPage();

        router.push(`/searchresult?keyword=&type=${newTypeQuery}&sort=id-asc`);
      }

      usage === 'compatibility' &&
        router.push(`/compatibility?type=${newTypeQuery}`);
    }
  };

  const handleCommonButtonClick = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('type', 'all');

    router.push(`/searchresult?${searchParams.toString()}`);
  };

  const tagNames = Object.keys(TYPE_TAG_CONTENTS) as PokemonType[];

  return (
    <div
      onClick={handleFilterClick}
      className="flex flex-col items-center max-w-[50.5rem] min-w-[15.75rem] px-4 pt-6 pb-5 border-4 rounded-2xl bg-white-10 shadow-outer/down">
      <h3 className="mb-6 text-2xl font-bold">
        {TYPE_FILTERS_TITLES[lang][usage]}
      </h3>
      <ul className="relative flex flex-wrap justify-center gap-[.625rem] max-w-[48.1875rem] mb-4">
        {tagNames.map((name, index) => (
          <li key={index}>
            <TypeTag usage="button" type={name} size="large" lang={lang} />
          </li>
        ))}
      </ul>
      {usage === 'search' && (
        <CommonButton
          type="viewAll"
          lang={lang}
          data-type="all"
          onClick={handleCommonButtonClick}
          className="mt-2"
        />
      )}
    </div>
  );
}
