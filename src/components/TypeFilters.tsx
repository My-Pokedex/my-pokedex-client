'use client';

import { useRouter } from 'next/navigation';
import TypeTag from './TypeTag';
import CommonButton from './CommonButton';
import { DefaultProps, PokemonType } from '@/types/common';
import { TYPE_TAG_CONTENTS, TYPE_FILTERS_TITLES } from '@/constants/contents';

type FilterUsage = 'search' | 'compatibility';

interface TypeFiltersProps extends DefaultProps {
  usage: FilterUsage;
}

export default function TypeFilters({ usage }: TypeFiltersProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;

    if (e.target instanceof HTMLElement && e.target.dataset.tagName) {
      const newTypeQuery = e.target.dataset.tagName;

      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('type', newTypeQuery);

      router.push(`/searchresult?${searchParams.toString()}`);
    }
  };

  const tagNames = Object.keys(TYPE_TAG_CONTENTS) as PokemonType[];

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center max-w-[50.5rem] min-w-[17.5rem] px-3 pt-6 pb-5 mx-5 mt-[3.75rem] border-4 rounded-2xl bg-white-10 shadow-outer/down">
      <h3 className="mb-6 text-2xl font-bold">{TYPE_FILTERS_TITLES[usage]}</h3>
      <ul className="relative flex flex-wrap justify-center space-x-[.625rem] max-w-[48.1875rem] mb-4">
        {tagNames.map((name, index) => (
          <li key={index} className="mb-[.625rem]">
            <TypeTag usage="button" type={name} />
          </li>
        ))}
      </ul>
      {usage === 'search' && (
        <CommonButton type="viewAll" data-tag-name="all" />
      )}
    </div>
  );
}
