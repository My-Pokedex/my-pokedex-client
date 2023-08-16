import Logo from '@components/Logo';
import NavBar from '@components/NavBar';
import SearchInput from '@components/SearchInput';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[url('/assets/img/home_bg.jpg')] bg-cover bg-center bg-no-repeat">
      <NavBar className="absolute top-[3.75rem] right-0 z-50" />
      <main>
        <Logo location="main" className="mb-[2.5rem]" />
        <SearchInput type="main" className="mb-[7.5rem]" />
      </main>
    </div>
  );
}
