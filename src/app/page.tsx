import Logo from '@components/Logo';
import NavBar from '@components/NavBar';
import SearchInput from '@components/SearchInput';

export default function Home() {
  return (
    <>
      <NavBar className="absolute top-[3.75rem] right-0 z-50" />
      <main>
        <Logo location="main" className="mb-[2.5rem]" />
        <SearchInput type="main" className="mb-[7.5rem]" />
      </main>
    </>
  );
}
