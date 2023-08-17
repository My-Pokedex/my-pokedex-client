import TypeTag from './TypeTag';
import { DefaultProps, PokemonType } from '@/types/common';
import { TYPE_TAG_CONTENTS, TYPE_FILTERS_TITLES } from '@/constants/contents';
import CommonButton from './CommonButton';

type FilterUsage = 'search' | 'compatibility';

interface TypeFiltersProps extends DefaultProps {
  usage: FilterUsage;
}

export default function TypeFilters({ usage }: TypeFiltersProps) {
  const tagNames = Object.keys(TYPE_TAG_CONTENTS) as PokemonType[];

  return (
    <section className="flex flex-col items-center max-w-[50.5rem] min-w-[17.5rem] px-3 py-5 mx-5 mt-[3.75rem] border-4 rounded-2xl bg-white-10 shadow-outer/down">
      <h2 className="mb-6 text-2xl font-bold">{TYPE_FILTERS_TITLES[usage]}</h2>
      <ul className="flex flex-wrap justify-center space-x-[.625rem] max-w-[48.1875rem] mb-4">
        {tagNames.map((name, index) => (
          <li key={index} className="mb-[.625rem]">
            <TypeTag usage="button" type={name} />
          </li>
        ))}
      </ul>
      {usage === 'search' && <CommonButton type="viewAll" />}
    </section>
  );
}
