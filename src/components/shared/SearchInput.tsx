'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { usePageStore } from '@/stores';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@/types/common';

type InputType = 'main' | 'header';

interface SearchInputProps extends DefaultProps {
  type: InputType;
}

export default function SearchInput({ type, className }: SearchInputProps) {
  const router = useRouter();
  const { resetPage } = usePageStore();
  const [keyword, setKeyword] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    resetPage();
    router.push(`/searchresult?keyword=${keyword}&type=all&sort=id-asc`);

    formRef.current && formRef.current.reset();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={twMerge(
        `relative flex items-center w-max border-blue-50 bg-white-10 rounded-full shadow-outer/down ${SEARCH_INPUT_SIZE[type].form}`,
        className,
      )}>
      <input
        type="search"
        placeholder="포켓몬 이름을 입력하세요."
        onChange={handleChange}
        className={`placeholder-gray-30 bg-transparent ${SEARCH_INPUT_SIZE[type].search}`}
      />
      <input
        type="submit"
        title="검색하기"
        value=""
        className={`absolute bg-cover bg-[url('/assets/img/search.svg')] cursor-pointer ${SEARCH_INPUT_SIZE[type].submit}`}
      />
    </form>
  );
}

const SEARCH_INPUT_SIZE = {
  main: {
    form: 'w-[26.25rem] h-[3.75rem] border-[.3125rem] max-2cards:w-[20rem]',
    search:
      'w-[21.25rem] ml-[1.125rem] text-lg max-2cards:w-[15rem] max-2cards:text-[1.125rem]',
    submit: 'top-[.625rem] right-[.625rem] w-8 h-8',
  },
  header: {
    form: 'w-[12.5rem] h-8 border-[.1875rem]',
    search: 'w-[10.25rem] ml-2 text-[.75rem]',
    submit: 'top-[.3125rem] right-[.3125rem] w-4 h-4',
  },
} as const;
