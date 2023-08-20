'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@/types/common';

type InputType = 'main' | 'header';

interface SearchInputProps extends DefaultProps {
  type: InputType;
}

export default function SearchInput({ type, className }: SearchInputProps) {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/searchresult?keyword=${keyword}&sort=ascending`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge(
        `relative flex items-center w-max border-blue-50 bg-white-10 rounded-full shadow-outer/down ${SEARCH_INPUT_SIZE[type].form}`,
        className,
      )}>
      <input
        type="search"
        placeholder="포켓몬 이름을 입력하세요."
        onChange={handleChange}
        className={`placeholder-gray-30 ${SEARCH_INPUT_SIZE[type].search}`}
      />
      <input
        type="submit"
        title="검색하기"
        value=""
        className={`absolute bg-[url('/assets/img/search.svg')] cursor-pointer ${SEARCH_INPUT_SIZE[type].submit}`}
      />
    </form>
  );
}

const SEARCH_INPUT_SIZE = {
  main: {
    form: 'w-[30.625rem] h-[4.125rem] border-[.3125rem]',
    search: 'w-[25.25rem] ml-[1.25rem] text-xl',
    submit: 'top-[.625rem] right-[.625rem] w-[2.25rem] h-[2.25rem]',
  },
  header: {
    form: 'w-[12.5rem] h-8 border-[.1875rem]',
    search: 'w-[10.625rem] ml-2 text-[.75rem]',
    submit: 'top-[.3125rem] right-[.3125rem] w-4 h-4 bg-cover',
  },
} as const;
