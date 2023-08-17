'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@/types/props';

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

  const formStyle = {
    main: 'w-[30.625rem] h-[4.125rem] border-[.3125rem]',
    header: 'w-[16.625rem] h-[2.875rem] border-[.1875rem]',
  };

  const searchInputStyle = {
    main: 'w-[25.25rem] ml-[1.25rem] text-xl',
    header: 'w-[13rem] ml-[.75rem] text-base',
  };

  const submitInputStyle = {
    main: `top-[.625rem] right-[.625rem] w-[2.25rem] h-[2.25rem]`,
    header: `top-[.5rem] right-[.5rem] w-[1.5rem] h-[1.5rem] bg-cover`,
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge(
        `relative flex items-center border-blue-50 bg-white-10 rounded-full shadow-outer/down ${formStyle[type]}`,
        className,
      )}>
      <input
        type="search"
        placeholder="포켓몬 이름을 입력하세요."
        onChange={handleChange}
        className={`placeholder-gray-30 ${searchInputStyle[type]}`}
      />
      <input
        type="submit"
        title="검색하기"
        value=""
        className={`absolute bg-[url('/assets/img/search.svg')] cursor-pointer ${submitInputStyle[type]}`}
      />
    </form>
  );
}
