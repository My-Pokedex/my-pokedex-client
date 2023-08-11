import Logo from '@components/Logo';
import NavLink from '@components/NavLink';

export default function Home() {
  return (
    <main>
      <Logo location="main" />
      <NavLink destination="signin" />홈 페이지입니다 : )
    </main>
  );
}
