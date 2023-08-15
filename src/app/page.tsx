import Logo from '@components/Logo';
import NavBar from '@components/NavBar';
import SearchInput from '@components/SearchInput';

export default function Home() {
  return (
    <main>
      <Logo location="main" />
      <NavBar />홈 페이지입니다 : )
      <SearchInput type="main" />
    </main>
  );
}
