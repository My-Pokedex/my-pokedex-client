import { SearchInput } from '@/components';

export default function NoResults() {
  return (
    <div className="flex flex-col items-center gap-3 p-12 max-w-[50.5rem] mb-[3.75rem] border-4 rounded-2xl bg-white-10 text-xl text-black-10 shadow-outer/down 3cards:min-w-[50.5rem]">
      <h2 className="font-bold">
        검색 결과를 찾을 수 없어요 <span aria-hidden={true}>: (</span>
      </h2>
      <p className="font-bold">
        <span className="text-blue-50">다른 검색어</span>를 입력해 보세요.
      </p>
      <SearchInput type="main" className="mt-6" />
    </div>
  );
}
