'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { OPTION_CONTENTS } from '@/constants/contents';
import { SORT_QUERIES } from '@/constants/urls';

export default function Dropdown() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => setIsOpen((prevValue) => !prevValue);
  const handleOptionClick = (e: React.MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLUListElement) return;

    if (e.target instanceof HTMLElement && e.target.dataset.order) {
      const newSortQuery = SORT_QUERIES[+e.target.dataset.order];

      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('sort', newSortQuery);

      router.push(`/searchresult?${searchParams.toString()}`);

      setIsOpen(false);
    }
  };

  return (
    <div className="relative ml-auto">
      <h3 className="sr-only">정렬해서 보기</h3>
      <button
        role="combobox"
        type="button"
        onClick={handleDropdownClick}
        className={`relative min-w-[11rem] pl-4 py-[.875rem] border-4 rounded-2xl bg-white-10 text-xl font-bold text-left shadow-outer/down after:absolute after:top-[1.125rem] after:right-[.875rem] after:block after:content-[''] after:w-[1.375rem] after:h-[.875rem] after:bg-[url('/assets/img/arrow_down.svg')] ${
          isOpen && DROPDOWN_SCALE
        }`}>
        정렬 방식
      </button>
      {isOpen && (
        <ul
          role="listbox"
          onClick={handleOptionClick}
          className="absolute top-[4.25rem] min-w-[11rem] border-4 rounded-2xl bg-white-10 shadow-outer/down z-50">
          {OPTION_CONTENTS.map((optionName, index) => (
            <li
              key={index}
              role="option"
              data-order={index}
              className={`relative py-[.875rem] text-center cursor-pointer ${
                index !== 0 && OPTION_DIVIDE
              }`}>
              {optionName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const DROPDOWN_SCALE = 'after:top-4 after:-scale-y-100';

const OPTION_DIVIDE = `before:absolute before:-top-[.0625rem] before:block before:content-[''] before:w-[10.5rem] before:border-b-[.0625rem] before:border-dashed before:border-gray-50`;
