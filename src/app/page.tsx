import { Logo, NavBar, SearchInput } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[url('/assets/img/bg_home.jpg')] bg-cover bg-center bg-no-repeat">
      <NavBar className="absolute top-[3.75rem] right-0 z-50" />
      <main className="mx-4">
        <Logo location="main" className="mb-6" />
        <h2 className="sr-only">포켓몬 검색하기</h2>
        <SearchInput type="main" className="mb-[6.25rem]" />
      </main>
    </div>
  );
}
